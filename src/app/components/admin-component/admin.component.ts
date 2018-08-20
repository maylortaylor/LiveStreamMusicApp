import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../app.component";

import { UserModel } from "../../core/models/user.model";
import { UserService } from "../../core/auth/user.service";

@Component({
  selector: "admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.less"]
})
export class AdminComponent implements OnInit {
  app: AppComponent;
  user: UserModel;
  constructor(private userService: UserService) {}

  ngOnInit() {}
  ngAfterViewChecked() {
    this.user = this.userService.getCurrentUser();
  }
  public SendChannelId(channelId: string) {
    console.log(channelId);
  }
}
