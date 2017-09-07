import { Component } from '@angular/core';
import { NavController , AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  items = [];

  params: Object;
  pushPage: any;

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( 'this is item ' + this.items.length );
    }

    this.pushPage = LoginPage;

  }

  pushEvent(i){
    this.params = { id: i };
  }

  doInfinite(infiniteScroll) {
   console.log('Begin async operation');

   setTimeout(() => {
     for (let i = 0; i < 10; i++) {
       this.items.push( 'this is item ' + this.items.length );
     }

     console.log('Async operation has ended');
     infiniteScroll.complete();
   }, 500);
 }

}
