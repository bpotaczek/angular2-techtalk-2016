import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class NameResolve implements Resolve<string> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot): Promise<string>|boolean {
    return new Promise((resolve, reject) => {
      resolve('Name resolve works!');
    });
  }
}