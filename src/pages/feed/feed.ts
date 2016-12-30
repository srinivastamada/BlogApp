import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedService } from '../../app/services/feed.service';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  articles: any;
  constructor(public navCtrl: NavController, private feedService: FeedService) {

  }

  ngOnInit() {
    this.getPosts('php',30);
  }

  getPosts(tag, limit) {
    console.log("9lessons Demos Function");
    this.feedService.getPosts(tag, limit).subscribe(response => {
      console.log(response);
      this.articles = response.responseData.feed.entries;
    })
  }

  getImage(content) {
    var myRegexp = new RegExp(/<img.*?src="(.*?)"/);
    var match = myRegexp.exec(content);
 
    if(match)
    return match[1];
  }

  getTagData(tag){
    this.getPosts(tag, 30);
   console.log(tag);
  }



}
