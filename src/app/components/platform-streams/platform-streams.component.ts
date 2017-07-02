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
  ytCreators: any;

  constructor(
      public af: AngularFireDatabase,
      private streamData: PlatformStreamsService
    ) {  }

  ngOnInit() {
    // this.streams = this.streamData.getListOfPlatformStreams();
    this.ytCreators = this.streamData.getStandardStreams();
  }

}
