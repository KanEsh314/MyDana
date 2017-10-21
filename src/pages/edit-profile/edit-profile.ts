import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile : any;

  constructor(public httpprovider:HttpProvider, public loading:LoadingController, public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad(){
    let load = this.loading.create({
      content: 'Please wait...'
      });

        load.present();

        this.httpprovider.getUserProfile().subscribe(
            response => {
             
              this.profile = response;
              console.log(this.profile)
            },
            err => {
              console.log(err);
            },
            ()=>{
              load.dismiss()
            console.log('user profile revealed!')
          }
      );
}

  
  close(){
    this.viewCtrl.dismiss();
  }

}
