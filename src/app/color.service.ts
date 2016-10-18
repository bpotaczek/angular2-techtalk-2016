import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {

  getColors(): Array<string> {
    return [
      'black',
      'red',
      'green',
      'blue',
      'gray'
    ];
  }
}