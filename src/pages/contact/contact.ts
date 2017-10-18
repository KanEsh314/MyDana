import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PaymentPage} from '../payment/payment';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	value: number = 0;

  constructor(public navCtrl: NavController, public modalCtrl:ModalController) {

  }

  itemTapped(){
    let myModal = this.modalCtrl.create(PaymentPage);
    myModal.present();
  
  }

}
