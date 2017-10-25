import { Component } from '@angular/core';
import { NavController, ModalController, Platform, ToastController } from 'ionic-angular';
import { ArticleDetailsPage } from '../article-details/article-details';
import { HttpProvider } from '../../providers/http/http'
import { SocialSharing } from '@ionic-native/social-sharing';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	articles :any;

  constructor(public toast:ToastController, public platform:Platform, public actionSheet:ActionSheetController, public socialSharing:SocialSharing, public navCtrl: NavController, public modalCtrl:ModalController, public httpprovider:HttpProvider) {

  }

  ionViewDidLoad(){
  	this.httpprovider.getArticle().subscribe(
      response => {
        console.log(response)
        this.articles = response.data;
        console.log(this.articles)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('Article is ok!')
    }
    );
  }

  details(article){
    let myModal = this.modalCtrl.create(ArticleDetailsPage, {article:article});
    myModal.present();
  
  }

  shareButton() {

    let actionSheet = this.actionSheet.create({
      title: 'Select Social Sharing',
      buttons: [
        {
          text: 'Facebook',
          role: 'button',
          handler: () => {
             
                
                   this.socialSharing.shareViaFacebook(this.articles)
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
         
                  this.socialSharing.shareViaTwitter(this.articles)
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
