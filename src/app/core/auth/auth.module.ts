import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { authRouting } from './auth.routing';
import { LoginComponent, SignupComponent } from './auth.component';

@NgModule({
    imports:[
        authRouting,
        FormsModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent
    ]
})
export class AuthModule { }