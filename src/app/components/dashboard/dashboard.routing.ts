import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent, AccountComponent, SettingsComponent } from './child.component';
import { AuthGuard } from '../../core/auth/auth-guard.service';

const AppRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ AuthGuard ],
        children: [
            { path: '', component: AccountComponent },
            { path: 'account', component: AccountComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'settings', component: SettingsComponent }
        ]
    }
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(AppRoutes);