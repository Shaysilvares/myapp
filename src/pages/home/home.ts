import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from "../product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public objeto_home = {
    titulo: "Bateria Moura",
    preco: "R$ 100,00",
    vendedor: "WR autopeças"
  }

  constructor(
    public navCtrl: NavController) {

  }

  goToProductPage() {
    this.navCtrl.push(ProductPage)
  }

}
