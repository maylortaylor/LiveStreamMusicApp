import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { UserService } from "../../core/auth/user.service";
import { AuthService } from "../../core/auth/auth.service";

@Component({
  selector: "login-component",
  templateUrl: "./login.component.html",
  // styleUrls: ["./login.component.less"],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  signInPopup() {
    this.userService.signInPopup();
  }
  signInAnonymously() {
    this.userService.signInAnonymously();
  }
  signOut() {
    this.authService.logout();
  }
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
