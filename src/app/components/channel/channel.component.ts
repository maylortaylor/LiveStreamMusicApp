import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { YoutubeChannel } from "../../core/services/models/YoutubeChannel";

@Component({
	selector: "channel",
	templateUrl: "channel.component.html"
})
export class ChannelComponent implements OnInit {
	channel: YoutubeChannel;
	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		var d = this.route.paramMap.subscribe(paramMap => {
			var channelId = paramMap.get("channelId");
		});
	}
}
