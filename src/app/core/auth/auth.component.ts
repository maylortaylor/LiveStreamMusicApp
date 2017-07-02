import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    templateUrl: './signup.component.html'
})

export class SignupComponent {
    constructor(
        private af: AngularFireAuth,
        private router: Router
    ) {
    }

    onSubmit(formData) {
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.createUserWithEmailAndPassword(
                formData.value.email,
                formData.value.password
            ).then((success) => {
                console.log(success);
                this.router.navigate(['/login']);
            }).catch((err) => {
                console.log(err);
                this.router.navigate(['/login']);
            })
        }
    }
}


@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    constructor(
        private af: AngularFireAuth,
        private router: Router
    ) { }

    onsubmit(formData) {
        if (formData.valid) {
            console.log(formData.value);
            this.af.auth.signInWithEmailAndPassword(
                formData.value.email,
                formData.value.password
            ).then((success) => {
                console.log(success);
                this.router.navigate(['/dashboard']);
            }).catch((err) => {
                console.log(err);
                this.router.navigate(['/dashboard']);
            });
        }
    }
}