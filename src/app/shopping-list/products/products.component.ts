import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: Array<Product> = new Array<Product>();
  productToSearch: string = "";

  constructor() {
    //_productsArr = this.products;
    //_productsArr.push(new Product(2, "dsds", 5));
  }

  ngOnInit(): void {
    //products.push(new Product(2, "dsdsd", 5));
  }

  // delete a product by id
  deleteProduct(id: number): void {
    
    // update products to have all products that don't have the id parameter
    this.products = this.products.filter(product => product.id != id);
  }

  updateSearchParams(name: string) : void {
    this.productToSearch = name;
  }

  // filter products by name
  /* searchProducts(product: Product): boolean {

    // get all products that their name contain the name parameter
    //console.log(name);
    //return this.products.filter(product => product.name.includes(name));
    if (product.name.toLowerCase().includes(this.productToSearch.toLowerCase()))
      return true;

    return false;
  } */
}
