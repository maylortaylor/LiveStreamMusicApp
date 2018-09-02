import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { YoutubeChannel } from "../../core/services/models/YoutubeChannel";
import { YoutubeChannelService } from "../../core/services/youtube/youtube-channel.service"
import * as _ from "lodash";

@Component({
	selector: "channel",
	templateUrl: "channel.component.html"
})
export class ChannelComponent implements OnInit {
	channel: YoutubeChannel;
	constructor(
		private route: ActivatedRoute, 
		private router: Router,
		private channelService: YoutubeChannelService,
	) {}

	ngOnInit() {
		var d = this.route.paramMap.subscribe(paramMap => {
			var channelId = paramMap.get("channelId");
			console.log("Channel Component", channelId);
			this.getChannel(channelId);
		});
	}

	public getChannel(channelId: string) {
		var wonGetChannel = response => {
			console.log("WON GetChannel", response);
			this.channel = response;
		};
		var lostGetChannel = response => {
			console.log("LOST GetChannel", response);
		};

		var ytChannel = this.channelService.getChannelById(channelId);
		ytChannel.then(wonGetChannel).catch(lostGetChannel);
	}
}
