import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	slideData = [{image: "assets/yMD/md1.jpg"} , {image: "assets/yMD/md2.jpg"} , {image: "assets/yMD/md3.jpg"}]
	slideLength : boolean = false;

	cardData = [{"image": "assets/campaign/camp1.png", "title" : "Amal", "stitle" : "Korban Prihatin AidilAdha 2017", "desc" : "Far far away,behind the word mountains,far from the countries Vokalia", "price" : "RM 4,890 terkumpul setakat ini", "perce" : "80% tepati sasaran", "day" : "5 hari lagi"},
				      {"image": "assets/campaign/camp2.png", "title" : "Amal", "stitle" : "Korban Prihatin AidilAdha 2017", "desc" : "Far far away,behind the word mountains,far from the countries Vokalia", "price" : "RM 4,890 terkumpul setakat ini", "perce" : "80% tepati sasaran", "day" : "5 hari lagi"},
				      {"image": "assets/campaign/camp3.png", "title" : "Amal", "stitle" : "Korban Prihatin AidilAdha 2017", "desc" : "Far far away,behind the word mountains,far from the countries Vokalia", "price" : "RM 4,890 terkumpul setakat ini", "perce" : "80% tepati sasaran", "day" : "5 hari lagi"}];

  constructor(public navCtrl: NavController) {

    if(this.slideData.length>0)
  	{
  		this.slideLength = true;
  	}

  }

  moreDetail(){
    this.navCtrl.push(AboutPage);
  }
}
