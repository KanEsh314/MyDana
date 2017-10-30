import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
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
  userComment = '';
  kempen:any;
  user:any;

  constructor(public loading:LoadingController, public navCtrl: NavController, public navParams: NavParams, public httpprovider:HttpProvider, public viewCtrl:ViewController) {
  
    let load = this.loading.create({
      content: 'Please wait...'
      });

        load.present();
        this.kempen = navParams.get('kempen');
        this.comments = this.kempen.campaign_comments;
        // this.user = this.comments.user;

        // console.log(this.kempen.campaign_id)
        console.log(this.comments)
        load.dismiss();

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

   sendComment(){

    let details = {
          campaign_id : this.kempen.campaign_id,
          user_id : 1,
          title : 'this is my comment',
          desc : this.userComment
    }

     let load = this.loading.create({
      content: 'Posting...'
      });

     load.present();

    this.httpprovider.postComment(details).then((result) => {
      console.log('sini');
      load.dismiss();
      this.viewCtrl.dismiss();
    }, (err) => {
      console.log(err);
      load.dismiss();
    });
  }
}
