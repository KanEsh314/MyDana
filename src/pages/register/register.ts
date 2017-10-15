import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder) {

  	this.registerForm = formBuilder.group({
  		username : ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
  		email : ['', EmailValidator.isValid],
  		password : ['', Validators.compose([Validators.minLength(8), Validators.required])],
  		confirmPassword : ['',  Validators.compose([Validators.minLength(8), Validators.required])]
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){

 
    if(!this.registerForm.valid){
        console.log(this.registerForm.value);
    }
    else {
        console.log("success!")
        console.log(this.registerForm.value);
    }
  }

}
