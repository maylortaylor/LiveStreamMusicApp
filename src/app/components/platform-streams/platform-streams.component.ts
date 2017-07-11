import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PlatformStreamsService } from '../../core/services/platform-streams.service';
import { HelpfulService } from '../../core/services/helpful/helpful.service'
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
      private streamData: PlatformStreamsService,
      private helpful: HelpfulService
    ) {  }

  async ngOnInit() {
    this.platformChannels = await this.streamData.getListOfPlatformStreams()
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
