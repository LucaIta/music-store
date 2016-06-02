import { Component } from 'angular2/core';
import { CD } from './cd.model';
import { CartPipe } from './cart.pipe';
// import { CdComponent } from './cd.component';

@Component({
  selector: "cart-list",
  inputs: ['CDlist'],
  pipes: [CartPipe],
  template:`
  <h2 *ngFor="#currentCD of CDlist | cart">
    <h2>{{currentCD.name}}</h2>
    <h4> Artist: {{currentCD.artist}}</h4>
    <h4> Price $: {{currentCD.price}}</h4>
    <h4> Genre: {{currentCD.genre}}</h4>
    <br>
  </h2>
  <h2>{{ totalCart() }}</h2>
  `
})

export class cartComponent {
  // public filterCart : string = "bought";
  // public totalPrice : number = 0;
  // CDlist.forEach(function(CD){
  //   totalPrice += CD.price
  // })
  public CDlist: CD[];
  totalCart() {
    var total = 0;
    for(var album of this.CDlist) {
      if(album.bought) {
        total += album.price;
      }
    }
    console.log(total);
    return total;
  }
}
