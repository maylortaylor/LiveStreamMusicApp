import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AuthGuard } from "../../core/auth/auth-guard.service";

import { DashboardRouting } from "./dashboard.routing";
import { DashboardComponent } from "./dashboard.component";
import { ProfileComponent, AccountComponent, SettingsComponent } from "./child.component";
import { SearchFilterPipe } from "../../core/filters/search.filter";

import { PlatformStreamsComponent } from "../platform-streams/platform-streams.component";

@NgModule({
	declarations: [SearchFilterPipe, DashboardComponent, PlatformStreamsComponent, AccountComponent, ProfileComponent, SettingsComponent],
	imports: [CommonModule, DashboardRouting, FormsModule]
})
export class DashboardModule {}
