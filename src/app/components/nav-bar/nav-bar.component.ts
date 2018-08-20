import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../../core/auth/auth.service";
import { UserService } from "../../core/auth/user.service";
import { UserModel } from "../../core/models/user.model";
import * as firebase from "firebase/app";

import { SearchService } from "../../core/services/helpful/search.service";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.less"],
	changeDetection: ChangeDetectionStrategy.Default
})
export class NavBarComponent implements OnInit {
	user: UserModel;
	searchFilter: string;

	title: string = "Streamio";

	constructor(public authService: AuthService, private userService: UserService, private ss: SearchService, private cdr: ChangeDetectorRef) {}

	ngOnInit() {}
	onChange(newValue: any) {
		this.ss.addSearch(newValue);
	}
	ngAfterViewChecked() {
		this.user = this.userService.getCurrentUser();
		if (!!this.user) console.log("user object on navbar", this.user);
	}

	signInAnonymously() {
		console.log("SIGNING IN ANONYMOUSLY");
		this.authService.signInAnonymously();
	}
	logOut() {
		console.log("LOGGING OUT");
		this.authService.logout();
	}
}
