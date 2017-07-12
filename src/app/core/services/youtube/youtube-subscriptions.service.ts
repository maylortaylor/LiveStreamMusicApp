import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { YoutubeCreator } from  '../models/YoutubeCreator';
import { Globals } from '../../globals';

@Injectable()
export class YoutubeSubscriptionsService {
  streams: FirebaseListObservable<any[]>;
  baseUrl: string = "https://www.googleapis.com/youtube/v3/subscriptions?";
  youtubeKey: string;

  constructor(
    private http: Http,
    public af: AngularFireDatabase,
    private _sanitizer: DomSanitizer,
    private globals: Globals
  ) {
    this.youtubeKey = "&key=" + this.globals.youtubeKey;
  }

   getYoutubeCreatorInfo(channelId: string) : Observable<YoutubeCreator> {
    var channelId = `&channelId=${channelId}`;
    var url = this.baseUrl + `part=snippet,contentDetails` + channelId + this.youtubeKey;

    return this.http.get(url)
                .map((res: Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
   getSubscriptionsFromChannelId(channelId: string) {
    var channelId = `&channelId=${channelId}`;
    var url = this.baseUrl + `part=snippet,contentDetails` + this.youtubeKey;

    return this.http.get(url)
                .map((res: Response) => {
                  var data = res.json();
                  return data;
                })
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }


}
