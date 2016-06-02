import { Component } from 'angular2/core';
import { CD } from './cd.model'

@Component({
  selector: 'cd-display',
  inputs: ['CD'],
  template:`
  <div>
    <input *ngIf="CD.bought" type="checkbox" checked (click)="toggleBought(false)"/>
    <input *ngIf="!CD.bought" type="checkbox" (click)="toggleBought(true)"/>

    <label>{{ CD.name }}</label>

    <!--<h3> CD's title: {{CD.name}}</h3>
    <h4> Artist: {{CD.artist}}</h4>
    <h4> Price $: {{CD.price}}</h4>
    <h4> Genre: {{CD.genre}}</h4>-->

  </div>
  `
})

export class CdComponent {
  public CD : CD;
  toggleBought(setState : boolean){
    this.CD.bought = setState;
  }
}
