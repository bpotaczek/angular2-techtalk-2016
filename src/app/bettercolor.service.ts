import { Injectable } from '@angular/core';

@Injectable()
export class BetterColorService {

  getColors(): Array<string> {
    return [
      'darkgreen',
      'green',
      'lightgreen'
    ];
  }
}