import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ModalController } from 'ionic-angular';
import { CommentModalPage } from '../comment-modal/comment-modal';
import { CommentPage } from '../comment/comment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	slideData = [{image: "assets/img/bantu.jpg"},
               {image: "assets/img/health.jpg"},
               {image: "assets/img/qurban.jpg"}]
	slideLength : boolean = false;

	cardData = [{"image": "assets/img/bantu.jpg", "title" : "Kasih", "stitle" : "Sinar Prihatin & Ramadhan Prihatin", "desc" : "Far far away,behind the word mountains,far from the countries Vokalia", "price" : "RM 4,890 terkumpul setakat ini", "perce" : "80% tepati sasaran", "day" : "5 hari lagi"},
				      {"image": "assets/img/health.jpg", "title" : "Kesihatan", "stitle" : "MYHEART - Kerjasama IJN Foundation", "desc" : "Far far away,behind the word mountains,far from the countries Vokalia", "price" : "RM 4,890 terkumpul setakat ini", "perce" : "80% tepati sasaran", "day" : "5 hari lagi"},
				      {"image": "assets/img/qurban.jpg", "title" : "Amal", "stitle" : "Korban Prihatin AidilAdha 2017", "desc" : "Far far away,behind the word mountains,far from the countries Vokalia", "price" : "RM 4,890 terkumpul setakat ini", "perce" : "80% tepati sasaran", "day" : "5 hari lagi"}];

  constructor(public navCtrl: NavController, public modalCtrl:ModalController) {

    if(this.slideData.length>0)
  	{
  		this.slideLength = true;
  	}

  }

  moreDetail(){
    let myModal = this.modalCtrl.create(AboutPage);
    myModal.present();
  }

  commentPress(){
    let myModal = this.modalCtrl.create(CommentPage);
    myModal.present();
  
  }
}
