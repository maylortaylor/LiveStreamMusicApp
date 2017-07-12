import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeSubscription {
    id: string;
    title: string;
    description: string;
    publishedAt: string;
    channelId: string;
    customUrl: string;
    thumbnails: any;
    totalItemCount: number;
    newItemCount: number;
    isLiveStreaming: boolean = false;
}