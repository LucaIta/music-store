import { Component } from 'angular2/core';
import { CD } from './cd.model';
import { cdDisplayComponent } from './cd.display.component';

@Component({
  selector: "my-app",
  directives: [cdDisplayComponent],
  template: `
  <div class="container">
    <h1>Music Store</h1>
    <CD-display [CDlist]="CDs"></CD-display>
  </div>
  `
})

export class AppComponent {
   public CDs : CD[];
   constructor(){
     this.CDs = [
      new CD("Thriller.", "Michael Jackson", 6, "POP", 0),
      new CD("MammaMia.", "Abba ", 7, "POP", 1),
      new CD("Queen.", "The Queen", 5, "ROCK", 2),
      new CD("Bad.", "Michael Jackson", 6, "POP", 3)
     ];
   }
}
