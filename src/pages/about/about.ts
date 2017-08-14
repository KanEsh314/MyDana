import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

moreImg = [{image: "assets/img/mr2.png"} , {image: "assets/img/mr3.png"} , {image: "assets/img/mr4.png"}];

  constructor(public navCtrl: NavController) {

  }

}
