import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PlatformStreamsService } from './../platform-streams.service';
@Component({
  selector: 'app-platform-streams-component',
  templateUrl: './platform-streams-component.component.html',
  styleUrls: ['./platform-streams-component.component.css']
})
export class PlatformStreamsComponentComponent implements OnInit {
  streams: FirebaseListObservable<any[]>;

  constructor(
      public af: AngularFireDatabase,
      private data: PlatformStreamsService
    ) { 


  }

  ngOnInit() {
    this.streams = this.data.getListOfPlatformStreams();
  }

}
