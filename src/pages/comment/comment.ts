import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'

/**
 * Generated class for the CommentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

	comments : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider) {
  }

  ionViewDidLoad() {
  this.httpprovider.getComments().subscribe(
      data => {
        console.log(data)
        this.comments = data;
        console.log(this.comments)
      },
      err => {
        console.log(err);
      },
      ()=>{
      console.log('Comments is ok!')
    }
    );

  }

}
