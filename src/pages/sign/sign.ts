import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, LoadingController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { RegisterPage } from '../register/register';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth'
import { TabsPage } from '../tabs/tabs';

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

  constructor(public authprovider:AuthProvider, public loading:LoadingController, public google:GooglePlus, public viewCtrl:ViewController, public modalCtrl:ModalController, public navCtrl: NavController, public navParams: NavParams, private fb:Facebook, public formBuilder:FormBuilder) {
    this.loginForm = formBuilder.group({
      name : ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      password : ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

  facebookConnect(){

  	this.fb.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse ) => {
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', [])
      .then(profile => {
        console.log(profile)
        this.response = {email: profile['email'],
                         first_name: profile['first_name'],
                         picture: profile['picture_large']['data']['url'],
                         username: profile['name']}
      });

      //   this.httpprovider.fbLogin(this.response).then((result) => {
           
      //       console.log('register success');
      //   },
      //     (err) => {
      //     console.log(err);
      // });
    })
    .catch(e => console.log('Error logging into Facebook', e));

    // this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  googleLogin(){

    this.google.login({'webClientId': '449110707731-vi9ii4me0prbp33arimt2vbav0enj7hc.apps.googleusercontent.com'
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

          let details = this.loginForm.value;
          // console.log(details);

          let load = this.loading.create({
          content: 'Please wait...'
          });

            this.authprovider.login(details).then(result => {
            
            console.log(result);
            this.navCtrl.setRoot(TabsPage);
        }, 
          (err) => {
              console.log(err);
        });
    }
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
