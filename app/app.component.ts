import { Component } from 'angular2/core';
import { CD } from './cd.model';
import { cdDisplayComponent } from './cd.display.component';

@Component({
  selector: "my-app",
  directives: [cdDisplayComponent],
  template: `
  <div class="container">
    <h1>Whatever</h1>
    <h3 *ngFor="#currentCD of CDs">

      <CD-display [CD]="currentCD"></CD-display>
      
    </h3>
  </div>
  `
})

export class AppComponent {
   public CDs : CD[];
   constructor(){
     this.CDs = [
      new CD("Thriller.", "Michel Jackson", 6, "POP", 0),
      new CD("MammaMia.", "Abba ", 7, "POP", 1),
      new CD("Queen.", "The Queen", 5, "POP", 2),
      new CD("Bad.", "Michel Jackson", 6, "POP", 3)
     ];
   }
}
