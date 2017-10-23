import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

	news : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {

    this.news = navParams.get('news');
    console.log(this.news);
  }

closeModal(){
	this.viewCtrl.dismiss();
}
  

}
