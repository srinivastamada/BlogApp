import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FeedService{
    http: any;
    feedURL: String;

     constructor(http:Http){
        this.http = http;
        this.feedURL = 'https://www.googleapis.com/blogger/v2/blogs/992226187759619576/posts?key=AIzaSyCpHQE_zTZG_aw30Kh9CTaqymRrOTCj4yY';
    }

     getPosts(){
        return this.http.get(this.feedURL).map(res => res.json());
    }


}