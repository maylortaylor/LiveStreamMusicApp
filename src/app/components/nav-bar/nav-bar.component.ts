import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { UserService } from '../../core/auth/user.service';
import { UserModel } from '../../core/models/user.model';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: UserModel

  title:string  = 'Live Steam Music App';

  constructor(
    private userService: UserService
  ) {  }

  ngOnInit() {
  }
  ngAfterViewChecked() {
   this.user = this.userService.getCurrentUser();
  }
  signInPopup() {
    this.userService.signInPopup();
  }
  signInAnonymously() {
    this.userService.signInAnonymously();
  }
  signOut() {
    this.userService.signOut();
  }
  isAuthenticated() {
    this.userService.isAuthenticated();
  }
}
