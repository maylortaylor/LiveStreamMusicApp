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

  ngOnInit() {
    this.platformChannels = this.streamData.getListOfPlatformStreams();
    this.cleanCreators(this.platformChannels);
    // this.platformChannels = this.streamData.getStandardStreams();
  }

  cleanCreators(platformChannels: any){
    for (var i = 0; i < platformChannels.length; i++) {
      var channel = platformChannels[i];
      channel.description = this.truncate(channel.description, 25, null);
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
