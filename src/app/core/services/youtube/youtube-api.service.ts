import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { YoutubeCreator } from  '../models/YoutubeCreator';

@Injectable()
export class YoutubeApiService {
  streams: FirebaseListObservable<any[]>;
  creators: any;
  constructor(
    private http: Http,
    public af: AngularFireDatabase,
    private _sanitizer: DomSanitizer) {
   }

   getYoutubeCreatorInfo(youtubeId: string) : Observable<YoutubeCreator> {
    // let headers = new Headers({'Content-Type': 'application/json'});
    var url = `https://www.googleapis.com/youtube/v3/subscriptions?part=snippet,contentDetails&channelId=${youtubeId}&key=AIzaSyAyMH0ZQxiOmtovxaTrIe7C9X-0ccBr_LQ`
    return this.http.get(url)
                .map((res: Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }


}
