import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from "../product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController) {

  }

  goToProductPage() {
    this.navCtrl.push(ProductPage)
  }

}
