import { Component } from 'angular2/core';
import { CD } from './cd.model'

@Component({
  selector: 'cd-display',
  inputs: ['CD'],
  template:`
  <div>
    <input *ngIf="CD.bought" type="checkbox" checked (click)="toggleBought(false)" (click)="addPrice(CD.price)"/>
    <input *ngIf="!CD.bought" type="checkbox" (click)="toggleBought(true)"/>

    <label>{{ CD.name }}</label>

    <h4> Artist: {{CD.artist}}</h4>
    <h4> Price $: {{CD.price}}</h4>
    <h4> Genre: {{CD.genre}}</h4>
  </div>
  <h4>Total Price : {{totalPrice}}</h4>
  `
})

export class CdComponent {
  public totalPrice : number = 0;
  public CD : CD;
  toggleBought(setState : boolean){
    this.CD.bought = setState;
  }
  addPrice(price : number){
    this.totalPrice += price;
  }

}
