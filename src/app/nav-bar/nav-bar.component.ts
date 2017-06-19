import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { UserService } from './../user-service.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user: Observable<firebase.User>;
  title:string  = 'Live Steam Music App';

  constructor(
    private userService: UserService
  ) { 

  }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }

  login() {
    this.userService.login();
  }
  logout() {
    this.userService.logout();
  }
  isAuthenticated() {
    this.userService.isAuthenticated();
  }
}
