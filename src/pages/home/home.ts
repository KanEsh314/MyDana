import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ModalController } from 'ionic-angular';
import { CommentModalPage } from '../comment-modal/comment-modal';
import { CommentPage } from '../comment/comment';
import { HttpProvider } from '../../providers/http/http'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  latestcampaign : any;

  sliderImage : any;

	slideData = [{image: "assets/img/bantu.jpg"},
               {image: "assets/img/health.jpg"},
               {image: "assets/img/qurban.jpg"}]
	slideLength : boolean = false;

  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public httpprovider:HttpProvider, public navParams:NavParams) {

    if(this.slideData.length>0)
  	{
  		this.slideLength = true;
  	}

  }

  ionViewDidLoad(){
  this.httpprovider.getLatest().subscribe(
      data => {
        console.log(data)
        this.latestcampaign = data;
        console.log(this.latestcampaign)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('Latest is ok!')
    }
    );

  this.httpprovider.getSliderImage().subscribe(
      data => {
        console.log(data)
        this.sliderImage = data;
        console.log(this.sliderImage)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('Slider is ok!')
    }
    );
}

  moreDetail(campaign){
    let myModal = this.modalCtrl.create(AboutPage, {campaign:campaign});
    myModal.present();
  }

  commentPress(){
    let myModal = this.modalCtrl.create(CommentPage);
    myModal.present();
  
  }
}
