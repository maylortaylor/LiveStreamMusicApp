import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlatformStreamsService {
  streams: FirebaseListObservable<any[]>;

  constructor(public af: AngularFireDatabase) {

      this.streams = af.list('/streams', {
        query:{
          limitToFirst: 25
        }
      });
   }

   getListOfPlatformStreams() {
     return this.streams;
   }

}
