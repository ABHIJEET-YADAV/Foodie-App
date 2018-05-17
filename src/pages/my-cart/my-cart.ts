import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../Checkout/Checkout';
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
  tax=13.50;
  total=0;
  subtotal=0;
  i:any;

  myProd=[
    {
      name:"Chole bhature",
      price:"500",
      location:"Hanuman Dhaba",
      totalPrice:"500",
      qty:"1",


    },
    {
      name:"Paneer tikka masala",
      price:"1000",
      location:"Hanuman Dhaba",
      totalPrice:"1000",
      qty:"1"

    },
    {
      name:"Masala Dosa",
      price:"1500",
      location:"Hanuman Dhaba",
      totalPrice:"1500",
      qty:"1"

    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   for (this.i = 0; this.i < Object.keys(this.myProd).length; this.i++) { 
     
    this.subtotal+=parseInt(this.myProd[this.i].price);
  }
  this.total=this.subtotal+this.tax;
  console.log(this.total);
  
  }
  // increment product qty
  increment(value){
    value.totalPrice= parseInt(value.totalPrice)+parseInt(value.price);
    value.qty= parseInt(value.qty) +1;
    this.total+=parseInt(value.price);
    this.subtotal+=parseInt(value.price);
  }

  decrement(value){
    if(value.qty==1){
      value.qty="1";
    }
    else{
      value.totalPrice= parseInt(value.totalPrice)-parseInt(value.price);
      value.qty= parseInt(value.qty) -1;
      this.total-=parseInt(value.price);
      this.subtotal-=parseInt(value.price);
    }

  }

  delete(value,i){
    this.total-=parseInt(value.totalPrice);
    this.subtotal-=parseInt(value.totalPrice);
    this.myProd.splice(i,1);
    if(this.subtotal==0){
      this.total=0;
      this.tax=0;
    }
  }

  onCheckout(){
    this.navCtrl.push(CheckoutPage);
    }  

}
