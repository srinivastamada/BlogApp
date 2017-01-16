import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedService } from '../../app/services/feed.service';
import { Helper } from '../../app/services/helper.service';
import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  articles: any;
  tag: any;
  limit: any;
  constructor(public navCtrl: NavController, private feedService: FeedService,  private helper: Helper) {

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
      console.log(response.feed.entry);
      this.articles = response.feed.entry;
    })
  }

  getImage(content) {
     return this.helper.getImage(content);
  }

  getContentSnippet(content){
    return this.helper.getContentSnippet(content);
  }

  getTagData(tag) {
    this.getPosts(tag, 30);
    console.log(tag);
  }

  viewArticle(article) {
    this.navCtrl.push(ArticlePage, { article: article });
  }



}
