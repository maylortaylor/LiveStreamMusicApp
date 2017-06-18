import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-platform-streams-component',
  templateUrl: './platform-streams-component.component.html',
  styleUrls: ['./platform-streams-component.component.css']
})
export class PlatformStreamsComponentComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  streams: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public af: AngularFireDatabase) { 
    this.items = af.list('/messages', {
      query:{
        limitToFirst: 50
      }
    });

    this.streams = af.list('/streams', {
      query:{
        limitToFirst: 25
      }
    })
  }

  ngOnInit() {
  }
  Send(desc: string) {
    this.items.push({message: desc});
    this.msgVal = '';
  }
}
