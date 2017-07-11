import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { EmitterService } from '../../emitter.service';
import { UserService } from '../../core/auth/user.service';
import { PlatformStreamsService } from '../../core/services/platform-streams.service';
import { UserModel } from '../../core/models/user.model';
import { YoutubeApiService } from '../../core/services/youtube/youtube-api.service';


import { Observable } from "rxjs/Observable";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-add-stream',
  templateUrl: './add-stream.component.html',
  styleUrls: ['./add-stream.component.css']
})
export class AddStreamComponent implements OnInit {
  app: AppComponent;
  user: UserModel

  streams: FirebaseListObservable<any[]>;
  streamUrl: string = '';

  constructor(
      public af: AngularFireDatabase,
      private userService: UserService,
      private streamData: PlatformStreamsService,
      private ytApi: YoutubeApiService
  ) {
   }

  ngOnInit() {
    // this.streams = this.streamData.getListOfPlatformStreams();
  }
  ngAfterViewChecked() {
   this.user = this.userService.getCurrentUser();
  }

  public SendStreamLink(streamUrl: string) {
    this.ytApi.getYoutubeCreatorInfo('UCjhXxThStadXnlXFc_Yj55w')
      .subscribe(res => {
        console.log(res);
        
      })
    //check link with url regex
    // if (this.isAValidUrl(streamUrl)) {
    //   this.AddStreamLink(streamUrl);
    // } else {
    //   console.log('ERROR: invalid url', streamUrl);
    // }
  }



  private AddStreamLink(streamUrl: string) {
    this.streams.push({streamUrl: streamUrl});
    this.streamUrl = '';
  }
  private isAValidUrl(val: string) {
    var pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/;
    var result = pattern.test(val);
    return result;
  }
}
