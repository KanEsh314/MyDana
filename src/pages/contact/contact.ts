import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PaymentPage} from '../payment/payment';
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	articles :any;

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public httpprovider:HttpProvider) {

  }

  ionViewDidLoad(){
  	this.httpprovider.getArticle().subscribe(
      response => {
        console.log(response)
        this.articles = response;
        console.log(this.articles)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('Article is ok!')
    }
    );
  }

  itemTapped(){
    let myModal = this.modalCtrl.create(PaymentPage);
    myModal.present();
  
  }

}
