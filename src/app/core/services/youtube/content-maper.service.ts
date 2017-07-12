import { Injectable } from '@angular/core';
import { YoutubeSubscription } from '../models/YoutubeSubscription';

@Injectable()
export class ContentMapperService {

    constructor() { }

    mapSubscriptionToYoutubeCreator(subs: any): YoutubeSubscription[] {
        var ytSubs = new Array<YoutubeSubscription>();
        for (var i = 0; i < subs.items.length; i++) {
            var sub = subs.items[i];
            var newSub = new YoutubeSubscription();

            newSub.id = sub.id;
            newSub.channelId = sub.snippet.resourceId.channelId;
            newSub.title = sub.snippet.title;
            newSub.description = sub.snippet.description;
            newSub.publishedAt = sub.snippet.publishedAt;
            newSub.thumbnails = sub.snippet.thumbnails;
            newSub.totalItemCount = sub.contentDetails.totalItemCount;
            newSub.newItemCount = sub.contentDetails.newItemCount;

            ytSubs.push(newSub);
        }
        return ytSubs;
    }
}