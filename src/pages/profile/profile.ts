import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { AboutUsPage } from '../about-us/about-us';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editProfile(){
  	let myModal = this.modalCtrl.create(EditProfilePage);
    myModal.present();
  }

  aboutUs(){
    let myModal = this.modalCtrl.create(AboutUsPage);
    myModal.present();
  }

}
