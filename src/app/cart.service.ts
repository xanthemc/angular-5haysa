import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
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

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
