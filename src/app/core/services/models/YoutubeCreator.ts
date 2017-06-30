import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeCreator {
    id: string;
    title: string;
    description: string;
    videoId: string;
    customUrl: string;
    thumbnail: any;
    relatedPlaylists: string;
    statistics: any;
}