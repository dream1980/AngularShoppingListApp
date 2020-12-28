import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './shopping-list/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Array<Product>, name: string): Array<Product> {
        
        if (name == "")
          return products;

        return products.filter(function (product) {
          // product's name match the filter, so display this product
          if (product.name.toLowerCase().includes(name.toLowerCase()))
            return true;

          // product's name is not matching the filter, so don't display this product
          return false;
        });
  }

}
