import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	registerForm : FormGroup;

  constructor(public toast:ToastController, public loading:LoadingController, public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, public httpprovider:HttpProvider) {

  	this.registerForm = formBuilder.group({
  		name : ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      first_name : ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      last_name : ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      locale : ['', Validators.compose([ Validators.required])],
  		email : ['', EmailValidator.isValid],
      // birthdate : ['', Validators.compose([ Validators.required])],
      // phone_number : ['', Validators.compose([ Validators.required])],
      // address : ['', Validators.compose([ Validators.required])],
  		password : ['', Validators.compose([ Validators.minLength(8), Validators.required])],
  		// race : ['', Validators.compose([ Validators.required])],
    //   gender : ['', Validators.compose([ Validators.required])],
  	});
  }

  register(){

 
    if(!this.registerForm.valid){
        // console.log(this.registerForm.value);
    }
    else {
          console.log("success!")
          // console.log(this.registerForm.value);

          let details = this.registerForm.value;
          console.log(details);

          let load = this.loading.create({
          content: 'Please wait...'
          });

          load.present();

          this.httpprovider.register(details).then((result) => {
            load.dismiss();
               const toast = this.toast.create({
                message: 'Account created successfully',
                duration: 3000,
                position: 'middle'
              });
               toast.present();
            console.log('register success');
        },
          (err) => {
          console.log(err);
      });
    }
  }

}
