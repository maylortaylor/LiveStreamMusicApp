import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  user: Observable<firebase.User>;

 constructor(
      public afAuth: AngularFireAuth,
      public af: AngularFireDatabase
    )  {
      this.user = this.afAuth.authState;
    }

  isAuthenticated() {
    return (!!this.afAuth.auth.currentUser.uid ? true : false);
  }
  signInAnonymously() {
    this.afAuth.auth.signInAnonymously();
  }
  signInPopup() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
  getCurrentUser() {
    return this.afAuth.authState;
  }
}
