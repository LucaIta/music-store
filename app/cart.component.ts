import { Component } from 'angular2/core';
import { CD } from './cd.model';
import { CartPipe } from './cart.pipe';

@Component({
  selector: "cart-list",
  inputs: ['CDlist'],
  pipes: [CartPipe],
  template:`
  <h1>Shopping Cart</h1>
  <h2 *ngFor="#currentCD of CDlist | cart:filterCart">
    <h3>{{currentCD.name}}</h3>
    <br>
  </h2>

  `
})

export class cartComponent {
  public filterCart : string = "bought";
}
