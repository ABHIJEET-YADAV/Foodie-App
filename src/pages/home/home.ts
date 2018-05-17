import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyCartPage } from '../my-cart/my-cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onCart(){
    this.navCtrl.push(MyCartPage);
    }  

}
