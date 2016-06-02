import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from './cd.model';

@Pipe({
  name: "artist",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform (input: CD[], args) {
    var desiredArtist = args[0];
    if (desiredArtist === "The Queen") {
      return input.filter(function(CD){
        return CD.artist === "The Queen";
      });
    } else if (desiredArtist === "Michael Jackson"){
      return input.filter(function(CD){
        return CD.artist === "Michael Jackson";
      });
    } else if(desiredArtist === "Abba"){
      return input.filter(function(CD){
        return CD.artist === "Abba";
      });
    } else {
        return input;
    }
  }
}
