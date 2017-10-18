import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignPage } from '../pages/sign/sign';
import { ProfilePage } from '../pages/profile/profile';
import { PaymentPage } from '../pages/payment/payment';
import { CommentPage } from '../pages/comment/comment';
import { UpdatePage } from '../pages/update/update';
import { DetailsPage } from '../pages/details/details';
import { RegisterPage } from '../pages/register/register';
import { EditProfilePage} from '../pages/edit-profile/edit-profile';
import { AboutUsPage } from '../pages/about-us/about-us';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';
import { PayPal } from '@ionic-native/paypal'
import { HttpProvider } from '../providers/http/http';
import { SocialSharing } from '@ionic-native/social-sharing';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignPage,
    ProfilePage,
    PaymentPage,
    CommentPage,
    UpdatePage,
    DetailsPage,
    RegisterPage,
    EditProfilePage,
    AboutUsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignPage,
    ProfilePage,
    PaymentPage,
    CommentPage,
    UpdatePage,
    DetailsPage,
    RegisterPage,
    EditProfilePage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    PayPal,
    HttpProvider,
    SocialSharing
  ]
})
export class AppModule {}
