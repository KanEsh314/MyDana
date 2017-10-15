import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SignPage } from '../sign/sign';
import { ProfilePage } from '../profile/profile';
import { PaymentPage } from '../payment/payment';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  tab3Root = ProfilePage;

  constructor(public navCtrl: NavController) {}

  Authentication(){
  	this.navCtrl.push(SignPage);
  }
}
