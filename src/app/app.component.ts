import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PLB-23';
  nom;

  traiter(msg) {
    console.log(msg);
  }
}
