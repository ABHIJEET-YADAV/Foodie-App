import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the MyCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-cart',
  templateUrl: 'my-cart.html',
})
export class MyCartPage {

  qty1:any;
  qty2:any;
  price1=500;
  price2=1000;
  tax=13.50;
  total;
  subtotal;

  constructor(public navCtrl: NavController, public navParams: NavParams) { this.qty1 = 1; this.qty2 = 1;
    this.total = this.price1 + this.price2 + this.tax; this.subtotal = this.price1 + this.price2;
  }
  // increment product qty
incrementQty1() {
  console.log(this.qty1+1);
  this.qty1 += 1;
  this.price1 = this.qty1*500;
  this.total = this.price1 + this.price2 + this.tax;
  this.subtotal = this.price1 + this.price2;
  }
incrementQty2() {
  console.log(this.qty2+1);
  this.qty2 += 1;
  this.price2 = this.qty2*1000;
  this.total = this.price1 + this.price2 + this.tax;
  this.subtotal = this.price1 + this.price2;
  }  
  
  // decrement product qty
  decrementQty1() {
  if(this.qty1-1 < 1 ){
  this.qty1 = 1
  }else{
  this.qty1 -= 1;
  this.price1 = this.price1-500;
  this.total = this.price1 + this.price2 + this.tax;
  this.subtotal = this.price1 + this.price2;
  }
  }
  decrementQty2() {
    if(this.qty2-1 < 1 ){
    this.qty2 = 1
    }else{
    this.qty2 -= 1;
    this.price2 = this.price2-1000;
    this.total = this.price1 + this.price2 + this.tax;
    this.subtotal = this.price1 + this.price2;
    }
    }
}
