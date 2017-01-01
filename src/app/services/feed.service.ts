import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FeedService {
    http: any;
    feedURL: String;

    constructor(http: Http) {
        this.http = http;
        this.feedURL = 'http://demos.9lessons.info/blogfeed/';
    }

    getPosts(tag, limit) {
        return this.http.get(this.feedURL + tag + '/' + limit).map(res => res.json());
    }

    getImage(content) {
        var myRegexp = new RegExp(/<img.*?src="(.*?)"/);
        var match = myRegexp.exec(content);
        if (match)
        return match[1];
    }
}