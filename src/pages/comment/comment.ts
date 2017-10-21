import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'
import { AboutPage } from '../about/about';

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
  userComment = '';

  constructor(public loading:LoadingController, public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider, public viewCtrl:ViewController) {
  
    let load = this.loading.create({
      content: 'Please wait...'
      });

        load.present();
        this.comments = navParams.get('comments');
        load.dismiss();

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

   sendComment(){

    let details = {
          campaign_id : 1,
          user_id : 1,
          title : 'this is my comment',
          desc : this.userComment
    }

    this.httpprovider.postComment(details).then((result) => {
      console.log('sini');
      this.viewCtrl.dismiss();
    }, (err) => {
      console.log(err);
    });
  }
}
