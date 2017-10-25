import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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


  constructor(public toast:ToastController, public loading:LoadingController, public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public modalCtrl:ModalController, public httpprovider:HttpProvider, public navParams:NavParams, public socialSharing:SocialSharing) {
    if(this.slideData.length>0)
  	{
  		this.slideLength = true;
  	}

  }

  ionViewDidLoad(){
    let load = this.loading.create({
      content: 'Please wait...'
      });

        load.present();

        this.httpprovider.getLatest().subscribe(
        data => {
          console.log(data)
          this.latestcampaign = data.data;
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
        response => {
          console.log(response)
          this.sliderImage = response.data;
          console.log(this.sliderImage)
        },
        err => {
          console.log(err);
        },
        ()=>{
          load.dismiss()
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

  shareButton() {
   
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Social Sharing',
      buttons: [
        {
          text: 'Facebook',
          role: 'button',
          handler: () => {
             
                
                   this.socialSharing.shareViaFacebook(this.latestcampaign)
                   .then((data) =>
                   {
                     const toast = this.toast.create({
                        message: 'shared via fb',
                        duration: 3000,
                        position: 'middle'
                      });
                       toast.present();
                      console.log('Shared via Facebook');
                   })
                   .catch((err) =>
                   {
                     const toast = this.toast.create({
                        message: 'Not Shared via Fb',
                        duration: 3000,
                        position: 'middle'
                      });
                       toast.present();
                      console.log('Was not shared via Facebook');
                   });

            console.log('Destructive clicked');
          }
        },{
          text: 'Twitter',
          role: 'button',
          handler: () => {
         
                  this.socialSharing.shareViaTwitter(this.latestcampaign)
                  .then((data) =>
                  {
                     console.log('Shared via Twitter');
                  })
                  .catch((err) =>
                  {  const toast = this.toast.create({
                        message: 'cannot shared via twitter',
                        duration: 3000,
                        position: 'middle'
                      });
                       toast.present();
                     console.log('Was not shared via Twitter');
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