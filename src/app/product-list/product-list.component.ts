import { Component } from '@angular/core';

import { products, new_list } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  // new_list = new_list;
  /* 
  add_item() {
    this.new_list.push({
      id: 1,
      name: 'Testing',
      price: 799,
      description: 'A large phone with one of the best screens',
    });
  }
  delete_item() {
    for (var i = this.new_list.length - 1; i >= 0; --i) {
      if (this.new_list[i].id == 3) {
        this.new_list.splice(i, 1);
      }
    }
  } */

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
