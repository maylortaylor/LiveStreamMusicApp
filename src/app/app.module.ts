import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
// import { HttpModule, JsonpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthModule } from './core/auth/auth.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AppRouting } from './app.routes';

import { AddStreamComponent } from '../app/components/add-stream/add-stream.component';
import { NavBarComponent } from '../app/components/nav-bar/nav-bar.component';
import { PlatformStreamsComponent } from '../app/components/platform-streams/platform-streams.component';

import { PlatformStreamsService } from '../app/core/services/platform-streams.service';
import { UserService } from '../app/core/auth/user.service';
import { YoutubeApiService } from '../app/core/services/youtube/youtube-api.service';

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
    AppComponent,
    PlatformStreamsComponent,
    AddStreamComponent,
    NavBarComponent
  ],
  imports: [
    AppRouting,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AuthModule,
    BrowserModule,
    CommonModule,
    DashboardModule,
    HttpModule
  ],
  providers: [
    PlatformStreamsService,
    UserService,
    YoutubeApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
