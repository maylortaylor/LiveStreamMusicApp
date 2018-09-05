import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../../app.component";
import { EmitterService } from "../../emitter.service";
import { UserService } from "../../core/auth/user.service";
import { PlatformStreamsFBService } from "../../core/services/firebaseDb/platform-streams.service";
import { UserModel } from "../../core/models/user.model";

import { Observable } from "rxjs/Observable";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from "firebase/app";

@Component({
  selector: "app-add-stream",
  templateUrl: "./add-stream.component.html",
  styleUrls: ["./add-stream.component.less"]
})
export class AddStreamComponent implements OnInit {
  app: AppComponent;
  user: UserModel;

  // streams: FirebaseListObservable<any[]>;
  streamUrl: string = "";

  constructor(
    public af: AngularFireDatabase,
    private userService: UserService,
    private streamData: PlatformStreamsFBService
  ) {}

  ngOnInit() {
    // this.streams = this.streamData.getListOfPlatformStreams();
  }
  ngAfterViewChecked() {
    this.user = this.userService.getCurrentUser();
  }

  public SendStreamLink(streamUrl: string) {
    // this.ytApi.getYoutubeCreatorInfo('UCjhXxThStadXnlXFc_Yj55w')
    //   .subscribe(res => {
    //     console.log(res);
    //   })
    //check link with url regex
    // if (this.isAValidUrl(streamUrl)) {
    //   this.AddStreamLink(streamUrl);
    // } else {
    //   console.log('ERROR: invalid url', streamUrl);
    // }
  }

  private AddStreamLink(streamUrl: string) {
    // this.streams.push({ streamUrl: streamUrl });
    this.streamUrl = "";
  }
  private isAValidUrl(val: string) {
    var pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;
    var result = pattern.test(val);
    return result;
  }
}
