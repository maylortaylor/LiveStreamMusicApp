import { Component, Inject } from '@angular/core';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent {
    public userData: any;
    constructor(
        private af: AngularFireAuth
    ) {  }

    ngOnInit() {
        this.af.authState.subscribe(auth => {
          console.log(auth);
          this.userData = auth;
        });
    }

}

@Component({
  selector: 'account',
  templateUrl: './account.component.html'
})

export class AccountComponent {
  public auth: any;
  constructor(
      @Inject(FirebaseApp) firebaseApp: any
    ) {
    this.auth = firebaseApp.auth();
    console.log(this.auth);
  }

  changeUser(userData) {
    if(userData.valid) {
      console.log(userData.value);
      this.auth.currentUser.updateProfile(userData.value)
        .then((success) => {
          console.log('Success', success);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  changeEmail(emailData) {
    if(emailData.valid) {
      console.log(emailData.value);
      this.auth.currentUser.updateEmail(emailData.value.email)
        .then((_) => {
          console.log('Success');
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  changePassword(passwordData) {
    if(passwordData.valid) {
      console.log(passwordData.value);
      // let us reauthenticate first irrespective of how long
      // user's been logged in!

      // const user = this.auth.currentUser;
      // const credential = this.auth.EmailAuthProvider.credential(user.email, passwordData.value.oldpassword);
      // console.log(credential);
      // this.auth.reauthenticate(credential)
      //   .then((_) => {
      //     console.log('User reauthenticated');
      //     this.auth.updatePassword(passwordData.value.newpassword)
      //       .then((_) => {
      //         console.log('Password changed');
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       })
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   })
    }
  }


}

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html'
})

export class SettingsComponent { }