import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { YoutubeCreator } from "../models/YoutubeCreator";
import { YoutubeSubscription } from "../models/YoutubeSubscription";
import { YoutubeChannelService } from "../../services/youtube/youtube-channel.service";
import { ContentMapperService } from "../youtube/content-mapper.service";
import { YoutubeChannel } from "../models/YoutubeChannel";
@Injectable()
export class FirebaseUploadService {
	channels = new Array<YoutubeChannel>();

	constructor(
		private mapper: ContentMapperService,
		private ytchanel: YoutubeChannelService,
		private af: AngularFireDatabase,
		private _sanitizer: DomSanitizer
	) {}

	uploadChannels(subs: YoutubeSubscription[]) {
		console.log("uploading channels", subs);

		var wonGetChannel = response => {
			console.log("WON GetChannel", response);
			var channel = this.mapper.mapSubscriptionToChannel(response);
			const platformChannels = this.af.object("platform-channels/" + channel.id);
			platformChannels.set(channel);
			// this.channels.push(channel);
			// console.log("channels", this.channels);
		};
		var lostGetChannel = response => {
			console.log("LOST GetChannel", response);
		};
		for (var i = 0; i < subs.length; i++) {
			var sub = subs[i];
			var channel = this.ytchanel.getChannelById(sub.channelId);
			channel.then(wonGetChannel).catch(lostGetChannel);
		}
	}
}
