import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from "@angular/platform-browser";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { YoutubeCreator } from "../models/YoutubeCreator";
@Injectable()
export class PlatformStreamsFBService {
	// streams: FirebaseListObservable<any[]>;
	channels: any;

	constructor(public af: AngularFireDatabase, private _sanitizer: DomSanitizer) {}

	async getListOfPlatformStreams() {
		return this.af.list<any>("/platform-channels", ref => {
			let q = ref.limitToFirst(25);
			return q;
		}).valueChanges();
	}
}
