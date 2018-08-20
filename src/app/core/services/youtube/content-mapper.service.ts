import { Injectable } from "@angular/core";
import { YoutubeSubscription } from "../models/YoutubeSubscription";
import { YoutubeChannel } from "../models/YoutubeChannel";
import { HelpfulService } from "../helpful/helpful.service";

import * as _ from "lodash";

@Injectable()
export class ContentMapperService {
	constructor(private helpful: HelpfulService) {}

	mapSubscriptionToYoutubeCreator(subs: any): YoutubeSubscription[] {
		var ytSubs = new Array<YoutubeSubscription>();
		for (var i = 0; i < subs.items.length; i++) {
			var sub = subs.items[i];
			var newSub = new YoutubeSubscription();

			newSub.id = sub.id;
			newSub.channelId = sub.snippet.resourceId.channelId;
			newSub.title = sub.snippet.title;
			newSub.description = this.helpful.truncate(sub.snippet.description, 280);
			// newSub.publishedAt = sub.snippet.publishedAt; //sub.publishedAt is when you subscribed to the channel (not very helpful)
			newSub.thumbnails = sub.snippet.thumbnails;
			newSub.totalItemCount = sub.contentDetails.totalItemCount;
			newSub.newItemCount = sub.contentDetails.newItemCount;

			ytSubs.push(newSub);
		}
		return ytSubs;
	}
	mapSubscriptionToChannel(channelJson: any): YoutubeChannel {
		var ytChannel = new YoutubeChannel();
		var channel: any = _.first(channelJson.items);

		ytChannel.id = channel.id;
		ytChannel.snippet = channel.snippet;
		ytChannel.thumbnails = channel.snippet.thumbnails;
		ytChannel.statistics = channel.statistics;
		ytChannel.topicDetails = channel.topicDetails;
		ytChannel.status = channel.status;

		return ytChannel;
	}
}
