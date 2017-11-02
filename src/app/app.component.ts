import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks'
import { TabsPage } from '../pages/tabs/tabs';


//declare var FCMPlugin;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public deeplinks:Deeplinks, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
  
    });
}

ngAfterViewInit() {
    this.platform.ready().then(() => {
      
    this.deeplinks.route({
     '/tabs': TabsPage
     // '/universal-links-test': AboutPage,
     // '/products/:productId': ProductPage
   }).subscribe((match) => {
     // match.$route - the route we matched, which is the matched entry from the arguments to route()
     // match.$args - the args passed in the link
     // match.$link - the full link data
     console.log('Successfully matched route', match);
   }, (nomatch) => {
     // nomatch.$link - the full link data
     console.error('Got a deeplink that didn\'t match', nomatch);
   });
      
// this.deeplinks.routeWithNavController(this.navCtrl, {
//   '/about-us': TabsPage,
//   // '/products/:productId': ProductPage
// }).subscribe((match) => {
//     // match.$route - the route we matched, which is the matched entry from the arguments to route()
//     // match.$args - the args passed in the link
//     // match.$link - the full link data
//     console.log('Successfully matched route', match);
//   }, (nomatch) => {
//     // nomatch.$link - the full link data
//     console.error('Got a deeplink that didn\'t match', nomatch);
//   });

    })
  }

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

