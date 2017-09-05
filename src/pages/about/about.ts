import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { UpdatePage } from '../update/update';
import { DetailsPage } from '../details/details';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

moreImg = [{image: "assets/img/mr2.png"} , {image: "assets/img/mr3.png"} , {image: "assets/img/mr4.png"}];

items = [];

  constructor(public navCtrl: NavController) {

  	this.items = [
  		'Comment',
  		'Update'
  	];
  }

  itemSelected(item: string) {
    if (item == 'Campaign') {
    	console.log("Selected Page",item)
    }else if (item == 'Comment') { 
    	this.navCtrl.push(CommentPage);
    }else if(item == 'Update'){
    	this.navCtrl.push(UpdatePage);
    }
  }

  details(){
    this.navCtrl.push(DetailsPage);
  }

  payHere(){
    this.navCtrl.push(PaymentPage);
  }

}
