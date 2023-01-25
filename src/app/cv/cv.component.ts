import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 22, 'Ingénieur', 'bart.jpeg'),
    new Candidat(1, 'homer', 'simpson', 55, 'Directeur', 'homer.jpg'),
    new Candidat(1, 'marge', 'simpson', 44, 'Chef de projet', 'marge.jpeg'),
  ];
  selectedCandidat: Candidat;

  recupererSelectedCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
