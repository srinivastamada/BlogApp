
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FeedService } from './services/feed.service'
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPage } from '../pages/feed/feed';
import { PopularPage } from '../pages/popular/popular';



@Component({
  templateUrl: 'app.html',
  providers: [FeedService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = TabsPage;
  tags: Array<{ title: string }>;

  constructor(platform: Platform) {
    this.tags = [
      { title: 'PHP' },
      { title: 'JavaScript' },
      { title: 'AngularJS' },
      { title: 'ReactJS' },
      { title: 'HTML5' }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  

  getTagData(tag) {
   localStorage.setItem('tag',tag.toLowerCase());
   this.nav.setRoot(TabsPage,{tag: tag});
    
  }



}
