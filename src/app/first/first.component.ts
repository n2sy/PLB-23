import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  nom = 'Didier';
  age = 37;
  bgColor = 'pink';
  hd = false;

  clickHandler() {
    alert("J'ai été cliqué !");
  }

  traitement(msg) {
    console.log(msg);
  }
}
