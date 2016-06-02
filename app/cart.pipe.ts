import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from './cd.model';

@Pipe({
  name: "cart",
  pure: false
})

export class CartPipe implements PipeTransform {
  transform(input: CD[], args) {
    // var desired = args[0];
    // if (desired === "bought") {
    return input.filter(function(CD) {
      return CD.bought === true;
    });
  //   } else {
  //     return input;
  //  };
  }
}
