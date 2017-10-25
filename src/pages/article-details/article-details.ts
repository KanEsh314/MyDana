import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {

  	this.details = navParams.get('article');
  	console.log(this.details);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticleDetailsPage');
  }

  closeModal(){
  	this.viewCtrl.dismiss();
  }

}
