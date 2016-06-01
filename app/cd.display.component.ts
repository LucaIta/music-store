import { Component } from 'angular2/core';

@Component({
  selector: "CD-display",
  inputs: ['CD'],
  template:`

  <h4> CD's tile: {{CD.name}}</h4>
  <h4> Artist: {{CD.artist}}</h4>
  <h4> Price: {{CD.price}}</h4>
  <h4> Genre: {{CD.genre}}</h4>
  <br>

  `
})

export class cdDisplayComponent {

}
