import { Component } from 'angular2/core';
import { CD } from './cd.model';

@Component({
  selector: "CD-display",
  inputs: ['CDlist'],
  template:`

  <h2 *ngFor="#CD of CDlist">
    <h3 (click)="cdClicked(CD)"
     [class.selected]="CD === selectedCD">
     CD's tile: {{CD.name}}</h3>
    <h4> Artist: {{CD.artist}}</h4>
    <h4> Price: {{CD.price}}</h4>
    <h4> Genre: {{CD.genre}}</h4>
    <br>
  </h2>
  `
})

export class cdDisplayComponent {
  public selectedCD : CD;
  cdClicked(clickedCD : CD) {
    console.log(clickedCD)
    this.selectedCD = clickedCD
  }
}
