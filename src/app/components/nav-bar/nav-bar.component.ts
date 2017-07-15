import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { UserService } from '../../core/auth/user.service';
import { UserModel } from '../../core/models/user.model';
import * as firebase from 'firebase/app';

import { SearchService } from '../../core/services/helpful/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {
  user: UserModel
  searchFilter: string;

  title:string  = 'Live Steam Music App';

  constructor(
    private userService: UserService,
    private ss: SearchService
  ) {  }

  ngOnInit() {
  }
  onChange(newValue: any){
    this.ss.addSearch(newValue);
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
