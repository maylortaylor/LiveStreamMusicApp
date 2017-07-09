import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { YoutubeCreator } from './models/YoutubeCreator'
@Injectable()
export class PlatformStreamsService {
  streams: FirebaseListObservable<any[]>;

  constructor(
    public af: AngularFireDatabase,
    private _sanitizer: DomSanitizer) {

      this.streams = af.list('/platform-channels', {
        query:{
          limitToFirst: 25
        }
      });
   }

   getListOfPlatformStreams() {
      this.streams.subscribe(items => {
        console.log(items);
        
      })     
      return this.streams;
   }

   getStandardStreams() {
      return this.seedCreators();
   }

   private seedCreators(): Array<YoutubeCreator> {
      var creators = new Array<YoutubeCreator>();

      creators[0] = new YoutubeCreator();
      creators[0].id = "UCXIyz409s7bNWVcM-vjfdVA";
      creators[0].title = "Majestic Casual";
      creators[0].description = "Welcome to our first 24/7 music livestream. It's a playground for us that is all about lofi hip hop music and funny gifs we find online. Music wise we pick mellow ...";
      creators[0].thumbnail = this._sanitizer.bypassSecurityTrustStyle('url(https://yt3.ggpht.com/-IvB7kpusDTk/AAAAAAAAAAI/AAAAAAAAAAA/Ud61zrffQSs/s240-c-k-no-mo-rj-c0xffffff/photo.jpg)');
      creators[0].videoId = "0dEr_J3TP10";
      creators[0].statistics = 2000;

      creators[1] = new YoutubeCreator();
      creators[1].id = "UCoP2nmYSKQ0oisOGCLmPLcQ";
      creators[1].title = "NEOTIC";
      creators[1].description = "ＳＩＭＰＳＯＮＷＡＶＥ\nSimpsonwave maker.\n\n\nVaporwave, Future, Simpsonswave, Instrumental, Downtempo, bass, beat, simpsons aesthetic, chillwave, chill out,  lo-fi, experimental.";
      creators[1].thumbnail = this._sanitizer.bypassSecurityTrustStyle('url(https://yt3.ggpht.com/-MGFkAYSDDiE/AAAAAAAAAAI/AAAAAAAAAAA/Z2H7cDzzQ8Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg)');
      creators[1].videoId = "0dEr_J3TP10";
      creators[1].statistics = 329482;

      creators[2] = new YoutubeCreator();
      creators[2].id = "UCgPrZc5wFFpfzK71sZOFoRQ";
      creators[2].title = "NEOWAVE";
      creators[2].description = "vaporwave, future, simpsonswave, instrumental, simpsonwave, downtempo, bass, beat, aesthetic, chillwave, chill out, lo-fi, experimental, FUTURE FUNK, neotic, retro, nostalgia, vaportrap, cloudrap, trapwave, chill, relax music, calm, calm down, anxiety, sad, sadness music.\n90s 80s 70s.";
      creators[2].thumbnail = this._sanitizer.bypassSecurityTrustStyle('url(https://yt3.ggpht.com/-TGe44YL0QD0/AAAAAAAAAAI/AAAAAAAAAAA/LbYir5AED0s/s88-c-k-no-mo-rj-c0xffffff/photo.jpg');
      creators[2].videoId = "0dEr_J3TP10";
      creators[2].statistics = 240293;

      return creators;     
   }

}
