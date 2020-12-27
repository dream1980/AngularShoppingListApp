import { Component, OnInit, NgModule } from '@angular/core';
import { Product } from './product';
import { AddComponent } from './add/add.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  // products list, array of products
  products: Array<Product> = new Array<Product>();
  //prods = { prod1: "belt", prod2: "corn" };

  constructor() {
  }

  ngOnInit(): void {
    
  }
  
  // get all products
  getProducts(): Array<Product> {

    return this.products;
  }
}
