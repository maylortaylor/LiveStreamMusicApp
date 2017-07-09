import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { AuthGuard } from './auth.service';
import { SignupComponent } from './core/auth/auth.component';

export const router: Routes = [
    { path: '', component: AppComponent },
    { path: 'signup', component: SignupComponent },

]

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(router);