import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PlatformStreamsComponentComponent } from './platform-streams-component/platform-streams-component.component';

import { PlatformStreamsService } from './platform-streams.service';
import { UserService } from './user-service.service';

import { AddStreamComponentComponent } from './add-stream-component/add-stream-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
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
    PlatformStreamsComponentComponent,
    AddStreamComponentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    PlatformStreamsService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
