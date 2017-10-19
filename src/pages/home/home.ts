import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ModalController } from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { HttpProvider } from '../../providers/http/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';

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

  constructor( public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public modalCtrl:ModalController, public httpprovider:HttpProvider, public navParams:NavParams, public socialSharing:SocialSharing) {

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

  commentPress(campaign){
    let myModal = this.modalCtrl.create(CommentPage, campaign);
    myModal.present();
  
  }

  // shareButton(){

  //   this.socialSharing.shareViaFacebook('Share', this.latestcampaign).then(() => {
  //     // Success!
  //   }).catch(() => {
    
  //   });

  //   this.socialSharing.shareViaTwitter('Share', this.latestcampaign).then(() => {
  //     // Success!
  //   }).catch(() => {
    
  //   });
  // }

  shareButton() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Social Sharing',
      buttons: [
        {
          text: 'Facebook',
          // role: 'destructive',
          handler: () => {
               this.socialSharing.shareViaFacebook('Share', this.latestcampaign).then(() => {
                }).catch(() => {
                });
            console.log('Destructive clicked');
          }
        },{
          text: 'Twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter('Share', this.latestcampaign).then(() => {
            }).catch(() => {
            
            });
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}

