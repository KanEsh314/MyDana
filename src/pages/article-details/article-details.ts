import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the ArticleDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article-details',
  templateUrl: 'article-details.html',
})
export class ArticleDetailsPage {

	details :any;

  constructor(public loading:LoadingController, public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {

     let load = this.loading.create({
      content: 'Please wait...'
      });

     load.present();
  	this.details = navParams.get('article');
  	console.log(this.details);
    load.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleDetailsPage');
  }

  closeModal(){
  	this.viewCtrl.dismiss();
  }

}
