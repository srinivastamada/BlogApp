import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedService } from '../../app/services/feed.service';
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  constructor(public navCtrl: NavController, private feedService: FeedService) {

  }
  
  ngOnInit(){
    
    this.getPosts();
  }

  getPosts(){
     console.log("9lessons Demos Function");
    this.feedService.getPosts().subscribe(response =>{
      console.log("9lessons OutPut");
      console.log(response);
    })
  }



}
