import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController, ModalController, LoadingController} from 'ionic-angular';
import { CommentPage } from '../comment/comment';
import { UpdatePage } from '../update/update';
import { DetailsPage } from '../details/details';
import { PaymentPage } from '../payment/payment';
import { HttpProvider } from '../../providers/http/http';
import { ImageViewerController } from 'ionic-img-viewer'

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  campaign:any;
  kempen = {};

  commentBadge : any;
  newsBadge : any;

	moreImg = [{image: "assets/img/health.jpg"} , {image: "assets/img/qurban.jpg"} , {image: "assets/img/bantu.jpg"}];

items = [];

image:any;

  constructor(public imgViewer:ImageViewerController, public loading:LoadingController, public modalCtrl:ModalController, public navParams:NavParams, public navCtrl: NavController , public viewCtrl: ViewController, public httpprovider:HttpProvider) {

    this.campaign = navParams.get('campaign');
    console.log(this.campaign);
  }

  ionViewDidLoad(){

     let load = this.loading.create({
      content: 'Please wait...'
      });

        load.present();
        this.httpprovider.getCampaign(this.campaign.campaign_id).subscribe(
            response => {
              // console.log(response)
              this.kempen = response.data;
              console.log(this.kempen)
              this.commentBadge = response.data.comments.length;
              this.newsBadge = response.data.news.length;
              this.image = response.data.campaign_image;
            },
            err => {
              console.log(err);
              load.dismiss();
            },
            ()=>{
              load.dismiss();
            console.log('Latest is ok!')
          }
    );
}

imageTapped(image){
  this.image = image;

}


   commentsTapped(kempen){
    let myModal = this.modalCtrl.create(CommentPage, {kempen:kempen});
    myModal.present();
  }

   newsTapped(kempen){
    let myModal = this.modalCtrl.create(UpdatePage, kempen);
    myModal.present();
  }

  details(kempen){
    let myModal = this.modalCtrl.create(DetailsPage, kempen);
    myModal.present();
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  donate(){
    let myModal = this.modalCtrl.create(PaymentPage);
    myModal.present();
  }
}
