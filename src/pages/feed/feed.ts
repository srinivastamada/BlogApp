import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedService } from '../../app/services/feed.service';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  articles: any;
  tag: any;
  limit: any;
  constructor(public navCtrl: NavController, private feedService: FeedService) {

    this.defaultArticles();
  }

  ngOnInit() {
    this.getPosts(this.tag, this.limit);
  }

  defaultArticles() {

    if (localStorage.getItem('tag') == null) {
      this.tag = 'php';
    }
    else {
      this.tag = localStorage.getItem('tag');
    }

    this.limit = 30;
  }

  getPosts(tag, limit) {
    console.log("XXXXX " + tag);
    this.feedService.getPosts(tag, limit).subscribe(response => {
      console.log(response.responseData.feed.entries);
      this.articles = response.responseData.feed.entries;
    })
  }

  getImage(content) {
    var myRegexp = new RegExp(/<img.*?src="(.*?)"/);
    var match = myRegexp.exec(content);
    if (match)
      return match[1];
  }

  getTagData(tag) {
    this.getPosts(tag, 30);
    console.log(tag);
  }

  viewArticle(article) {
    this.navCtrl.push(ArticlePage, { article: article });
  }



}
