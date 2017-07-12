import { Injectable } from '@angular/core';

@Injectable()
export class HelpfulService {

    constructor() {
    }

    truncate(str, length, ending = null) {
        if (length == null) {
        length = 100;
        }
        if (ending == null) {
        ending = '...';
        }
        if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
        } else {
        return str;
        }
    };
}