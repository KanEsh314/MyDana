import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

profile:any;
  constructor(public navCtrl: NavController,public viewCtrl:ViewController, public navParams: NavParams) {
  
  	this.profile = navParams.get('profile');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

  closeModal(){
  	this.viewCtrl.dismiss();
  }

}
