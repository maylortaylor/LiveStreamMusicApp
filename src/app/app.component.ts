import { Component } from '@angular/core';
// import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import { UserService } from '../app/core/auth/user.service';
import { UserModel } from './core/models/user.model';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: UserModel = new UserModel();
  constructor(
      // private router: Router,
      public afAuth: AngularFireAuth,
      public af: AngularFireDatabase,
      private userService: UserService
    )  {
      this.userService.afAuth.auth.onAuthStateChanged((user) => {
        this.userService.setUser(user);
      });
  }


}
