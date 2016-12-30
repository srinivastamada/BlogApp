import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'article.html'
})
export class ArticlePage {
  article: any;
  content:any;

  constructor(public navCtrl: NavController, public params:NavParams) {
   this.article = params.get('article');
 // feedPage.getImage(this.content); 
  }

  
  

}
