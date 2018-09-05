import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
// import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { YoutubeCreator } from "../models/YoutubeCreator";
import { Globals } from "../../globals";

@Injectable()
export class YoutubeVideoService {
	baseUrl: string = "https://www.googleapis.com/youtube/v3/search?";
	youtubeKey: string;

	constructor(
		// private http: HttpClient, 
		private af: AngularFireDatabase, 
		private _sanitizer: DomSanitizer, 
		private globals: Globals
	) {
		this.youtubeKey = "&key=" + this.globals.youtubeKey;
	}

	async getActiveLiveStreamsByChannelId(channelId: string) {
		var channelIdItem = "&channelId=" + channelId;
		var url = this.baseUrl + "maxResults=50&part=snippet&eventType=live&type=video" + channelIdItem + this.youtubeKey;
		// console.log("url", url);

		var webCall = this.http
			.get(url);
			// .map((res: Response) => res.json().items)
			// .catch((error: any) => Observable.throw(error.json().error || "Server error"));

		return webCall.toPromise();
		// webCall.subscribe(
		//   data => {
		//   console.log("SUBS", data);
		//   if (!!data) {
		//     var ids = [];
		//     for (var i = 0; i < data.items.length; i++) {
		//       var sub = data.items[i];
		//       ids.push(sub.id);
		//     }
		//     return ids;
		//   }
		//   },
		//   err => {
		//     console.log(err);
		//   }
		// );
	}
}
