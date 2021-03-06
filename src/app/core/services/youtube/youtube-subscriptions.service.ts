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
    var channelIdItem = "&channelId=" + channelId;
    var url = this.baseUrl + "part=snippet,contentDetails" + channelIdItem + this.youtubeKey;

    return this.http.get(url)
                .map((res: Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }
  async getSubscriptionsFromChannelId(channelId: string) {
    var channelIdItem = "&channelId=" + channelId;
    var url = this.baseUrl + "maxResults=50&part=id,snippet,contentDetails" + channelIdItem + this.youtubeKey;

    var webCall = this.http.get(url)
                .map((res: Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    return webCall.toPromise();
   }


}
