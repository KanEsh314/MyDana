import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

   getLatest(){
    return this.http.get("https://mydana.herokuapp.com/api/latest")
    .map(res => res.json())  
  }

   getCampaign(campaign_id){
    return this.http.get("https://mydana.herokuapp.com/api/campaign/"+campaign_id)
    .map(res => res.json())  
  }

  getSliderImage(){
    return this.http.get("https://mydana.herokuapp.com/api/banners")
    .map(res => res.json())  
  }

  getComments(){
    return this.http.get("https://mydana.herokuapp.com/api/campaign/1/campaigncomment")
    .map(res => res.json())  
  }

  getCampaignNews(){
    return this.http.get("https://mydana.herokuapp.com/api/campaign/1/campaignnew")
    .map(res => res.json())  
  }
}
