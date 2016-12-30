import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//import { FeedService } from '../services/feed.service';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { PopularPage } from '../pages/popular/popular';
import { FeedPage } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';
import { ArticlePage } from '../pages/article/article';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ArticlePage,
    PopularPage,
    FeedPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ArticlePage,
    PopularPage,
    FeedPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
