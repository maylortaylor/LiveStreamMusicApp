import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
// import { FormsModule } from '@angular/forms';
// import { HttpModule, JsonpModule } from '@angular/http';

import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { AuthModule } from "./core/auth/auth.module";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { AppRouting } from "./app.routes";
import { FormsModule } from "@angular/forms";

import { AddStreamComponent } from "../app/components/add-stream/add-stream.component";
import { NavBarComponent } from "../app/components/nav-bar/nav-bar.component";
import { PlatformStreamsComponent } from "../app/components/platform-streams/platform-streams.component";
import { AdminComponent } from "../app/components/admin-component/admin.component";

import { PlatformStreamsFBService } from "../app/core/services/firebaseDb/platform-streams.service";
import { UserService } from "../app/core/auth/user.service";
import { YoutubeSubscriptionsService } from "../app/core/services/youtube/youtube-subscriptions.service";
import { HelpfulService } from "./core/services/helpful/helpful.service";
import { Globals } from "./core/globals";
import { ContentMapperService } from "./core/services/youtube/content-mapper.service";
import { YoutubeLivestreamsService } from "./core/services/youtube/youtube-livestreams.service";
import { SearchService } from "./core/services/helpful/search.service";
import { AuthGuard } from "./core/auth/auth-guard.service";
import { AuthService } from "./core/auth/auth.service";
import { YoutubeChannelService } from "./core/services/youtube/youtube-channel.service";
import { YoutubeVideoService } from "./core/services/youtube/youtube-video.service";
import { FirebaseUploadService } from "./core/services/firebaseDb/firebaseUpload.service";
import { SearchFilterPipe } from "./core/filters/search.filter";
export const firebaseConfig = {
	apiKey: "AIzaSyDthkgNHn0XD4hmUiU1bp4O_A0wGoCtY18",
	authDomain: "livestreammusicapp.firebaseapp.com",
	databaseURL: "https://livestreammusicapp.firebaseio.com",
	projectId: "livestreammusicapp",
	storageBucket: "livestreammusicapp.appspot.com",
	messagingSenderId: "852655274432"
};

@NgModule({
	declarations: [
		//  Components
		AppComponent,
		PlatformStreamsComponent,
		AddStreamComponent,
		NavBarComponent,
		AdminComponent,

		//  Filters
		SearchFilterPipe
	],
	imports: [
		//  Routes
		AppRouting,
		//  Angular Firebase
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		//  Moudles
		AuthModule,
		BrowserModule,
		CommonModule,
		DashboardModule,
		HttpModule,
		FormsModule
	],
	providers: [
		Globals,
		PlatformStreamsFBService,
		UserService,
		YoutubeSubscriptionsService,
		HelpfulService,
		ContentMapperService,
		YoutubeLivestreamsService,
		SearchService,
		AuthGuard,
		AuthService,
		FirebaseUploadService,
		YoutubeChannelService,
		YoutubeVideoService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
