import { Injectable } from '@angular/core';
import { YoutubeSubscription } from '../models/YoutubeSubscription';
import { HelpfulService } from '../helpful/helpful.service';

@Injectable()
export class ContentMapperService {

    constructor(
        private helpful: HelpfulService
    ) { }

    mapSubscriptionToYoutubeCreator(subs: any): YoutubeSubscription[] {
        var ytSubs = new Array<YoutubeSubscription>();
        for (var i = 0; i < subs.items.length; i++) {
            var sub = subs.items[i];
            var newSub = new YoutubeSubscription();

            newSub.id = sub.id;
            newSub.channelId = sub.snippet.resourceId.channelId;
            newSub.title = sub.snippet.title;
            newSub.description = this.helpful.truncate(sub.snippet.description, 280);
            newSub.publishedAt = sub.snippet.publishedAt;
            newSub.thumbnails = sub.snippet.thumbnails;
            newSub.totalItemCount = sub.contentDetails.totalItemCount;
            newSub.newItemCount = sub.contentDetails.newItemCount;

            ytSubs.push(newSub);
        }
        return ytSubs;
    }
}