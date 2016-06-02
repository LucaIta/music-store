import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from './cd.model';

@Pipe({
  name: "genre",
  pure: false
})

export class CdPipe implements PipeTransform {
  transform(input: CD[], args) { // here probably we will put the parameter we will use to filter (genre, author)
    var desiredGenre = args[0];
    if (desiredGenre === "POP") {
      return input.filter(function(CD) {
        return CD.genre === "POP";
      });
    } else if (desiredGenre === "ROCK") {
      return input.filter(function(CD) {
        return CD.genre === "ROCK";
      });
    } else {
      return input;
   };
  }
}
