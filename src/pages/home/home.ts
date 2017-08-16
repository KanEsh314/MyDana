import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	slideData = [{image: "assets/slides/my1.png"} , {image: "assets/slides/my2.png"} , {image: "assets/slides/my3.png"}]
	slideLength : boolean = false;

	cardData = [{"image": "assets/campaign/camp1.png", "title" : "TitleInfo1", "desc" : "DescInfo1"},
				{"image": "assets/campaign/camp2.png", "title" : "TitleInfo2", "desc" : "DescInfo2"},
				{"image": "assets/campaign/camp3.png", "title" : "TitleInfo3", "desc" : "DescInfo3"}];

  constructor(public navCtrl: NavController) {

    if(this.slideData.length>0)
  	{
  		this.slideLength = true;
  	}

  }

}
