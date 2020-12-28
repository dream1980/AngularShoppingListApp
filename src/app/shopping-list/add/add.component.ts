import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @Input() products: Array<Product> = new Array<Product>();
  productToAdd: Product = new Product();
  
  constructor() { }

  ngOnInit(): void {

    // testing
    this.addProduct("Banana", 1);
    this.addProduct("Apple", 5);    
  }

  // insert a new product to the array
  addProduct(name: string, quantity: number): void {

    console.log(name, quantity);

    // generate an automatic id by using the array length
    let id: number = this.products.length + 1;
    
    // create a product with that automatic id and given params
    let prod: Product = new Product(id, name, quantity); 

    // adding the new product to the array
    this.products.push(prod);
  }
}
