import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController} from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { UpdatePage } from '../update/update';
import { DetailsPage } from '../details/details';
import { PaymentPage } from '../payment/payment';
import { HttpProvider } from '../../providers/http/http';

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
  kempen = {};

	moreImg = [{image: "assets/img/health.jpg"} , {image: "assets/img/qurban.jpg"} , {image: "assets/img/bantu.jpg"}];

items = [];

  constructor(public navParams:NavParams, public navCtrl: NavController , public viewCtrl: ViewController, public httpprovider:HttpProvider) {

    this.campaign = navParams.get('campaign');
    console.log(this.campaign);

  	this.items = [

      'Campaign',
  		'Comment',
  		'Update'

  	];
  }

  ionViewDidLoad(){
  this.httpprovider.getCampaign(this.campaign.campaign_id).subscribe(
      response => {
        console.log(response)
        this.kempen = response.data;
        console.log(this.kempen)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('Latest is ok!')
    }
    );
}

 

   commentsTapped(kempen){
     this.navCtrl.push(CommentPage, kempen);
   }

   newsTapped(kempen){
     this.navCtrl.push(UpdatePage, kempen);
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
