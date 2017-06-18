import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  streams: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(
      public afAuth: AngularFireAuth,
      public af: AngularFireDatabase
    )  {
    this.streams = af.list('/streams', {
      query:{
        limitToFirst: 25
      }
    })
    this.user = this.afAuth.authState;
    
  }
  title = 'Live Steam Music App';

  login() {
    this.afAuth.auth.signInAnonymously();
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  SendStreamLink(desc: string) {
    this.streams.push({streamUrl: desc});
    this.msgVal = '';
  }
}
