import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Helper } from '../../app/services/helper.service';

@Component({
  templateUrl: 'article.html'
})
export class ArticlePage {
  article: any;
  content:any;

  constructor(public navCtrl: NavController, public params:NavParams,  private helper: Helper) {
   this.article = params.get('article');
 // feedPage.getImage(this.content); 
  }

  getImage(content) {
     return this.helper.getImage(content);
  }

  
  

}
