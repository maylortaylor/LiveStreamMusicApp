import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Globals } from '../../globals';

@Injectable()
export class YoutubeLivestreamsService {
    baseUrl: string = "https://www.googleapis.com/youtube/v3/search?";
    youtubeKey: string;

    constructor(
    private http: Http,
    private _sanitizer: DomSanitizer,
    private globals: Globals
    ) {
          this.youtubeKey = "key=" + this.globals.youtubeKey
    }

    isChannelLivestreaming(channelId: string) {
        var channelIdItem = "&channelId=" + channelId;
        var url = this.baseUrl + this.youtubeKey + channelIdItem +  "&part=snippet,id&maxResults=20&eventType=live&type=video&order=date";

        var webCall = this.http.get(url)
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

        return webCall.toPromise();
    }
}