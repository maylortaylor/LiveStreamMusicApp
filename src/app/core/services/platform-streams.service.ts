import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { YoutubeCreator } from './models/YoutubeCreator'
@Injectable()
export class PlatformStreamsService {
  streams: FirebaseListObservable<any[]>;
  channels: any;

  constructor(
    public af: AngularFireDatabase,
    private _sanitizer: DomSanitizer
    ) { }

  async getListOfPlatformStreams() {
      var channels = this.af.list('/platform-channels', {
        query:{
          limitToFirst: 25
        }
      });
      return channels;
   }

}
