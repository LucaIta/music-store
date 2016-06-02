import { Component } from 'angular2/core';
import { CD } from './cd.model';
import {CdPipe} from './cd.pipe';
import {ArtistPipe} from './artist.pipe';

@Component({
  selector: "CD-display",
  inputs: ['CDlist'],
  pipes: [CdPipe, ArtistPipe],
  template:`
  <hr>
  <h4>Use this to filter by genre:</h4>
  <select (change)="onChange($event.target.value)">
    <option value="all">Show all</option>
    <option value="POP">Show POP albums</option>
    <option value="ROCK">Show ROCK albums</option>
  </select>
  <hr>

  <h4>Use this to filter by artist:</h4>
  <select (change)="onSelect($event.target.value)">
    <option value="all">Show all</option>
    <option value="The Queen">Sort by The Queen</option>
    <option value="Michael Jackson">Sort by Michael Jackson</option>
    <option value="Abba">Sort by Abba</option>
  </select>
  <hr>




  <h2 *ngFor="#CD of CDlist | genre:filterGenre | artist:filterArtist">
    <h3 (click)="cdClicked(CD)"
     [class.selected]="CD === selectedCD">
     CD's title: {{CD.name}}</h3>
    <h4> Artist: {{CD.artist}}</h4>
    <h4> Price $: {{CD.price}}</h4>
    <h4> Genre: {{CD.genre}}</h4>
    <br>
  </h2>
  `
})

export class cdDisplayComponent {
  public selectedCD : CD;
  public filterGenre : string = "all";
  public filterArtist : string = "all";
  cdClicked(clickedCD : CD) {
    console.log(clickedCD)
    this.selectedCD = clickedCD
  }
  onChange(filterOption) {
    this.filterGenre = filterOption;
    console.log(this.filterGenre)
  }

  onSelect(filterOption) {
    this.filterArtist = filterOption;
    console.log(this.filterArtist)
  }
}
