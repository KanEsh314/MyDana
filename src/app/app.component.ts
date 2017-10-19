import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';


// declare var FCMPlugin;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
//       FCMPlugin.getToken(
//     function (token) {
//         alert('Token: ' + token);
//         console.log('Token: ' + token);
//     },
//     function (err) {
//         alert('error retrieving token: ' + this.token);
//         console.log('error retrieving token: ' + err);
//     }
// );

// FCMPlugin.onNotification(
//   (data) => {
//     console.log(data);
//   },
//   (e) => {
//     console.log(e);
//   }
// );
    });
//     FCMPlugin.onNotification(
//     function(data){
//         if(data.wasTapped){
// //Notification was received on device tray and tapped by the user.
//             alert("Tapped: " +  JSON.stringify(data) );
//         }else{
// //Notification was received in foreground. Maybe the user needs to be notified.
//             alert("Not tapped: " + JSON.stringify(data) );
//         }
//     },
//     function(msg){
//         alert('onNotification callback successfully registered: ' + msg);
//         console.log('onNotification callback successfully registered: ' + msg);
//     },
//     function(err){
//         alert('Error registering onNotification callback: ' + err);
//         console.log('Error registering onNotification callback: ' + err);
//     }
// );
}

  openPage(page){
    this.nav.setRoot(page.component);
  }
}

