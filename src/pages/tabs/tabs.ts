import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from '../feed/feed';
import { PopularPage } from '../popular/popular';
import { AboutPage } from '../about/about';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tag:any;
  limit:any;
  tab1Root: any = FeedPage;
  tab2Root: any = PopularPage;
  tab3Root: any = AboutPage;

  constructor(public navCtrl: NavController) {
 
  }

  

}
