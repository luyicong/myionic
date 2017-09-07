import { Component } from '@angular/core';
import { NavController , AlertController , NavParams} from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  id:any
  constructor(public navCtrl: NavController,public navParams: NavParams,private alertCtrl: AlertController) {
     this.id = this.navParams.get('params');

     alert(this.id)
  }
}
