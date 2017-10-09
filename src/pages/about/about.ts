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

  campaign:any;

	moreImg = [{image: "assets/img/health.jpg"} , {image: "assets/img/qurban.jpg"} , {image: "assets/img/bantu.jpg"}];

items = [];

  constructor(public navParams:NavParams, public navCtrl: NavController , public viewCtrl: ViewController) {

    this.campaign = navParams.get('campaign');
    console.log(this.campaign);

  	this.items = [

      'Campaign',
  		'Comment',
  		'Update'

  	];
  }

 
  itemSelected(item: string) {
    if (item == 'Campaign') {
    	this.navCtrl.push(DetailsPage);
    }else if (item == 'Comment') { 
    	this.navCtrl.push(CommentPage);
    }else if(item == 'Update'){
      this.navCtrl.push(UpdatePage);
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
