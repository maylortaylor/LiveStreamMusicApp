import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AuthGuard } from "./core/auth/auth-guard.service";
import { SignupComponent } from "./core/auth/signup.component";
import { AdminComponent } from "./components/admin-component/admin.component";
import { PlatformStreamsComponent } from "./components/platform-streams/platform-streams.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ChannelComponent } from "./components/channel/channel.component";

export const router: Routes = [
	{ path: "", component: DashboardComponent },
	{ path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
	{ path: "music", component: PlatformStreamsComponent },
	{ path: "channel/:channelId", component: ChannelComponent },
	{ path: "signup", component: SignupComponent }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(router);
