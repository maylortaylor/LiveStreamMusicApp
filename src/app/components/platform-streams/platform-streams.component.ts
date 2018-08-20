import * as _ from "lodash";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { PlatformStreamsFBService } from "../../core/services/firebaseDb/platform-streams.service";
import { HelpfulService } from "../../core/services/helpful/helpful.service";
import { YoutubeSubscriptionsService } from "../../core/services/youtube/youtube-subscriptions.service";
import { Globals } from "../../core/globals";
import { ContentMapperService } from "../../core/services/youtube/content-mapper.service";
import { YoutubeSubscription } from "../../core/services/models/YoutubeSubscription";
import { YoutubeLivestreamsService } from "../../core/services/youtube/youtube-livestreams.service";
import { FirebaseUploadService } from "../../core/services/firebaseDb/firebaseUpload.service";
import { YoutubeVideoService } from "../../core/services/youtube/youtube-video.service";
import { Subscription } from "rxjs/Subscription";
import { SearchService } from "../../core/services/helpful/search.service";
import { YoutubeChannel } from "../../core/services/models/YoutubeChannel";
import { Router } from "@angular/router";

@Component({
	selector: "app-platform-streams",
	templateUrl: "./platform-streams.component.html",
	styleUrls: ["./platform-streams.component.less"]
})
export class PlatformStreamsComponent implements OnInit, OnDestroy {
	private subscriber: Subscription;
	streams: FirebaseListObservable<any[]>;
	platformChannels: any;
	searchWord: string;

	constructor(
		public af: AngularFireDatabase,
		private platformFB: PlatformStreamsFBService,
		private helpful: HelpfulService,
		private ytSubscriptions: YoutubeSubscriptionsService,
		private globals: Globals,
		private mapper: ContentMapperService,
		private livestream: YoutubeLivestreamsService,
		private ss: SearchService,
		private fbu: FirebaseUploadService,
		private ytVideo: YoutubeVideoService,
		private router: Router
	) {}

	async ngOnInit() {
		// this.getMusicCuratorsSubscriptions();

		await this.getPlatformChannels();
		this.subscriber = this.ss.text$.subscribe(data => {
			this.searchWord = data;
		});
	}
	ngOnDestroy() {
		if (this.subscriber) {
			this.subscriber.unsubscribe();
		}
	}
	goToChannelsPage(channelId: string) {
		this.router.navigate([`/channel/${channelId}`]);
	}
	private async getMusicCuratorsSubscriptions() {
		var wonGetSubs = data => {
			console.log("WON get subs", data);
			if (!!data) {
				var subs = this.mapper.mapSubscriptionToYoutubeCreator(data);
				// this.fbu.uploadChannels(subs);
				//check each sub to see if it is currently live streaming
				this.checkSubscriptionsForCurrentlyLivestreaming(subs);
				var sortedSubs = _.orderBy(subs, ["publishedAt"]);
				console.log("SUBSCRIPTIONS", sortedSubs);
				this.platformChannels = sortedSubs;
			}
		};
		var lostGetSubs = data => {
			console.log("LOST get subs", data);
		};
		await this.ytSubscriptions.getSubscriptionsFromChannelId(this.globals.musicCuratorChannelId).then(wonGetSubs).catch(lostGetSubs);
	}
	private async getPlatformChannels() {
		return await this.platformFB.getListOfPlatformStreams().then(data => {
			data.subscribe(items => {
				console.log(items);
				for (var i = 0; i < items.length; i++) {
					var channel: YoutubeChannel = items[i];
					var videos = this.ytVideo.getActiveLiveStreamsByChannelId(channel.id).then(response => {
						console.log("live stream video", response);
						if (!!response.length) {
							channel.livestream = _.first(response);
							channel.isLiveStreaming = true;
						}
					});
				}
				this.platformChannels = items;
				this.cleanCreators(this.platformChannels);
			});
		});
	}

	checkSubscriptionsForCurrentlyLivestreaming(subs: YoutubeSubscription[]) {
		for (var i = 0; i < subs.length; i++) {
			var sub = subs[i];
			this.livestream.isChannelLivestreaming(sub.channelId).then(ls => {
				// console.log("LS", ls);
				if (!!ls) {
					if (!!ls.items.length) {
						var liveStream: any = _.first(ls.items);
						var lsChannelId = liveStream.snippet.channelId;
						var lsPublishedAt = liveStream.snippet.publishedAt;
						var lsVideoId = liveStream.id.videoId;
						var channel: YoutubeSubscription = _.first(_.filter(subs, { channelId: lsChannelId }));

						channel.isLiveStreaming = true;
						channel.publishedAt = lsPublishedAt;
						channel.liveStreamVideoId = lsVideoId;
					}
				}
			});
		}
	}
	cleanCreators(platformChannels: any) {
		for (var i = 0; i < platformChannels.length; i++) {
			platformChannels[i].snippet.description = this.helpful.truncate(platformChannels[i].snippet.description, 280, null);
		}
	}

	getBackgroundImage(channel: YoutubeSubscription) {
		if (!!channel.thumbnails) {
			if (!!channel.thumbnails.high) {
				return channel.thumbnails.high.url;
			} else {
				return channel.thumbnails.default.url;
			}
		} else {
			return null;
		}
	}
}
