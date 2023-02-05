import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  items: Product[] = [];

  addToCart(product: Product) {
    // console.log(`add To Cart:${this.items}`);
    this.items.push(product);
  }

  getItems() {
    // console.log(`getItems:${this.items}`);
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
