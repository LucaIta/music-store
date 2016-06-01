import {Pipe, PipeTransform} from 'angular2/core';
import {CD} from './cd.model';

@Pipe({

})

export class CdPipe implements PipeTransform {
  transform(input: CD[], args) { // here probably we will put the parameter we will use to filter (genre, author)

  }
}
