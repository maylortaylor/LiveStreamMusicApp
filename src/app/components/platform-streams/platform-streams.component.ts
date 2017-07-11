import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PlatformStreamsService } from '../../core/services/platform-streams.service';

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
      private streamData: PlatformStreamsService
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
      platformChannels[i].description = this.truncate(platformChannels[i].description, 280, null);
    }
  }

  truncate(str, length, ending) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = '...';
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    };
  }
