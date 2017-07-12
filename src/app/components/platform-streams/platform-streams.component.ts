import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PlatformStreamsFBService } from '../../core/services/firebaseDb/platform-streams.service';
import { HelpfulService } from '../../core/services/helpful/helpful.service'
import { YoutubeSubscriptionsService } from '../../core/services/youtube/youtube-subscriptions.service'
import { Globals } from '../../core/globals'
import { ContentMapperService } from '../../core/services/youtube/content-maper.service'

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
      private mapper: ContentMapperService
    ) {  }

  async ngOnInit() {
    this.getMusicCuratorsSubscriptions()

    // this.platformChannels = this.getPlatformChannels();
  }

  private async getMusicCuratorsSubscriptions() {
    var wonGetSubs = (data) => {
      console.log("WON get subs", data);
      if (!!data){
        var creators = this.mapper.mapSubscriptionToYoutubeCreator(data);
        console.log("CREATORS", creators);
        this.platformChannels = creators;
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

  cleanCreators(platformChannels: any){
    for (var i = 0; i < platformChannels.length; i++) {
      platformChannels[i].description = this.helpful.truncate(platformChannels[i].description, 280, null);
    }
  }


  }
