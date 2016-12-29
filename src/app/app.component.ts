import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FeedService } from './services/feed.service'
import { TabsPage } from '../pages/tabs/tabs';



@Component({
  templateUrl: 'app.html',
  providers: [FeedService]
})
export class MyApp {
  rootPage = TabsPage;
  tags: Array<{ title: string }>;

  constructor(platform: Platform) {
    this.tags = [
      { title: 'PHP' },
      { title: 'Java Script' },
      { title: 'Angular' },
      { title: 'React' },
      { title: 'HTML' },
      { title: 'Jquery' }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  

  getTagData(tag) {
   // this.feedPage.getPosts(tag, 30);
    console.log(tag);
  }



}
