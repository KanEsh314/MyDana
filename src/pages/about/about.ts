import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { UpdatePage } from '../update/update';
import { DetailsPage } from '../details/details';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

	moreImg = [{image: "assets/img/health.jpg"} , {image: "assets/img/qurban.jpg"} , {image: "assets/img/bantu.jpg"}];

items = [];

  constructor(public navCtrl: NavController , public viewCtrl: ViewController) {

  	this.items = [
<<<<<<< HEAD
      'Campaign',
  		'Comment',
  		'Update'
=======
  		'Comment'
>>>>>>> 6430402cee5da1d19e37c9effeec279ba62b6aa6
  	];
  }

  itemSelected(item: string) {
    if (item == 'Campaign') {
    	this.navCtrl.push(DetailsPage);
    }else if (item == 'Comment') { 
    	this.navCtrl.push(CommentPage);
    }
  }


  details(){
    this.navCtrl.push(DetailsPage);
  }

  payhere(){
    this.navCtrl.push(PaymentPage);
  }

  getback(){
    this.viewCtrl.dismiss();
  }
}
