import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { RegisterPage } from '../register/register';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

/**
 * Generated class for the SignPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  loginForm : FormGroup;
response: any;
fbres:any;
  constructor(public google:GooglePlus, public viewCtrl:ViewController, public modalCtrl:ModalController, public navCtrl: NavController, public navParams: NavParams, private fb:Facebook, public formBuilder:FormBuilder) {
    this.loginForm = formBuilder.group({
      username : ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      password : ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

  facebookConnect(){
  	this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse ) => this.fbres = res)
    .catch(e => console.log('Error logging into Facebook', e));

    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  googleLogin(){

    this.google.login({
          'webClientId': '449110707731-vi9ii4me0prbp33arimt2vbav0enj7hc.apps.googleusercontent.com'
        }).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });

//     this.google.login({})
//   .then(res => {
// this.response = res;
//   })
//   .catch(err => console.error(err));

  }

  register(){
      let myModal = this.modalCtrl.create(RegisterPage);
      myModal.present();
    }

  login(){

    if(!this.loginForm.valid){
      console.log("error");
    }else{
      console.log("success");
    }
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
