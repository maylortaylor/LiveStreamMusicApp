import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import { UserModel } from "../models/user.model";

import * as firebase from "firebase/app";

@Injectable()
export class UserService {
  user: UserModel = new UserModel();

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    //this.checkLoginStatus();
  }
  checkLoginStatus() {
    this.afAuth.auth.onAuthStateChanged(user => {
      this.setUser(user);
    });
  }
  setUser(user: any) {
    if (!!user) {
      // User is signed in.
      this.user.uid = user.uid;
      this.user.email = user.email;
      this.user.emailVerified = user.emailVerified;
      this.user.displayName = user.displayName;
      this.user.photoUrl = user.photoUrl;
      this.user.refreshToken = user.refreshToken;

      console.log("LOGGED IN USER", this.user);
    } else {
      // No user is signed in.
      console.log("not logged in");
    }
  }
  clearUser() {
    this.user = new UserModel();
  }
  isAuthenticated() {
    return !!this.afAuth.auth.currentUser.uid ? true : false;
  }
  signInAnonymously() {
    this.afAuth.auth.signInAnonymously();
  }
  signInPopup() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result: any) => {
        console.log("WON signIn popup", result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      })
      .catch((error: any) => {
        console.log("LOST signIn popup", error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
  getCurrentUser() {
    if (!!this.user.uid) {
      // delete this.user.uid;
      return this.user;
    } else {
      return null;
    }
  }
}
