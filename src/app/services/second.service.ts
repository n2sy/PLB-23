import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}

  addition(a, b) {
    return a + b;
  }
}
