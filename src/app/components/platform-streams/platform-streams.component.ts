import * as _ from "lodash";
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PlatformStreamsFBService } from '../../core/services/firebaseDb/platform-streams.service';
import { HelpfulService } from '../../core/services/helpful/helpful.service';
import { YoutubeSubscriptionsService } from '../../core/services/youtube/youtube-subscriptions.service';
import { Globals } from '../../core/globals';
import { ContentMapperService } from '../../core/services/youtube/content-mapper.service';
import { YoutubeSubscription } from '../../core/services/models/YoutubeSubscription';
import { YoutubeLivestreamsService } from '../../core/services/youtube/youtube-livestreams.service';
@Component({
  selector: 'app-platform-streams',
  templateUrl: './platform-streams.component.html',
  styleUrls: ['./platform-streams.component.css']
})
export class PlatformStreamsComponent implements OnInit {
  streams: FirebaseListObservable<any[]>;
  platformChannels: any;

  constructor(
      public af: AngularFireDatabase,
      private platformFB: PlatformStreamsFBService,
      private helpful: HelpfulService,
      private ytSubscriptions: YoutubeSubscriptionsService,
      private globals: Globals,
      private mapper: ContentMapperService,
      private livestream: YoutubeLivestreamsService
    ) {  }

  async ngOnInit() {
    this.getMusicCuratorsSubscriptions()

    // this.platformChannels = this.getPlatformChannels();
  }

  private async getMusicCuratorsSubscriptions() {
    var wonGetSubs = (data) => {
      console.log("WON get subs", data);
      if (!!data){
        var subs = this.mapper.mapSubscriptionToYoutubeCreator(data);
        //check each sub to see if it is currently live streaming
        this.checkSubscriptionsForCurrentlyLivestreaming(subs);
        console.log("SUBSCRIPTIONS", subs);
        this.platformChannels = subs;
      }

    }
    var lostGetSubs = (data) => {
      console.log("LOST get subs", data);
    }
    await this.ytSubscriptions.getSubscriptionsFromChannelId(this.globals.musicCuratorChannelId)
    .then(wonGetSubs)
    .catch(lostGetSubs);
  }
  private async getPlatformChannels() {
    return await this.platformFB.getListOfPlatformStreams()
      .then((data) => {
        data.subscribe(items => {
          console.log(items);
          this.platformChannels = items;
          this.cleanCreators(this.platformChannels);
        });
      });
  }

  checkSubscriptionsForCurrentlyLivestreaming(subs: YoutubeSubscription[]) {
    for (var i = 0; i < subs.length; i++) {
      var sub = subs[i];
      this.livestream.isChannelLivestreaming(sub.channelId)
      .then(ls => {
        // console.log("LS", ls);
        if (!!ls) {
          if (!!ls.items.length) {
            var liveStream: any = _.first(ls.items);
            var lsChannelId = liveStream.snippet.channelId;
            var channel: YoutubeSubscription = _.first(_.filter(subs, {'channelId': lsChannelId}));

            channel.isLiveStreaming = true;
          }
        }
      });
    }
  }
  cleanCreators(platformChannels: any){
    for (var i = 0; i < platformChannels.length; i++) {
      platformChannels[i].description = this.helpful.truncate(platformChannels[i].description, 280, null);
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
      return null
    }

  }


  }
