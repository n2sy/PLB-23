import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstService {
  constructor(private secondSer: SecondService) {}

  showInfos() {
    console.log('je suis le First Service !');
    console.log(this.secondSer.addition(4, 5));
  }
}
