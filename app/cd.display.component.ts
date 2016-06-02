import { Component } from 'angular2/core';
import { CD } from './cd.model';
import {CdPipe} from './pipe';

@Component({
  selector: "CD-display",
  inputs: ['CDlist'],
  pipes: [CdPipe],
  template:`

  <select (change)="onChange($event.target.value)">
    <option value="all">Show all</option>
    <option value="POP">Show POP albums</option>
    <option value="ROCK">Show ROCK albums</option>
  </select>

  <h2 *ngFor="#CD of CDlist | genre:filterGenre">
    <h3 (click)="cdClicked(CD)"
     [class.selected]="CD === selectedCD">
     CD's title: {{CD.name}}</h3>
    <h4> Artist: {{CD.artist}}</h4>
    <h4> Price: {{CD.price}}</h4>
    <h4> Genre: {{CD.genre}}</h4>
    <br>
  </h2>
  `
})

export class cdDisplayComponent {
  public selectedCD : CD;
  public filterGenre : string = "all";
  cdClicked(clickedCD : CD) {
    console.log(clickedCD)
    this.selectedCD = clickedCD
  }
  onChange(filterOption) {
    this.filterGenre = filterOption; // not sure about the naming of the variable
    console.log(this.filterGenre)
  }
}
