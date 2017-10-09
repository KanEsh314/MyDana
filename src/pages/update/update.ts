import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the UpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

	news : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
    this.httpprovider.getCampaignNews().subscribe(
      data => {
        console.log(data)
        this.news = data;
        console.log(this.news)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('Latest is ok!')
    }
    );
  }

}
