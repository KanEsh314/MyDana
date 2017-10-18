import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

	campaignDetails = String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl :ViewController) {

  		this.campaignDetails = navParams.get('description');
  		console.log(this.campaignDetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
