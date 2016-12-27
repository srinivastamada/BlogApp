import {Injectable} from "@angular/core";
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FeedService{
    http: any;
    feedURL: String;

     constructor(http:Http){
        this.http = http;
        this.feedURL = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://feeds.feedburner.com/9lessons';
    }

     getPosts(){
        return this.http.get(this.feedURL).map(res => res.json());
    }


}