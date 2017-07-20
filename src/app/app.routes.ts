import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AuthGuard } from "./core/auth/auth-guard.service";
import { SignupComponent } from "./core/auth/signup.component";
import { AdminComponent } from "./components/admin-component/admin.component";
import { PlatformStreamsComponent } from "./components/platform-streams/platform-streams.component";
export const router: Routes = [
	{ path: "", component: AppComponent },
	{ path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
	{ path: "music", component: PlatformStreamsComponent },
	{ path: "signup", component: SignupComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(router);
