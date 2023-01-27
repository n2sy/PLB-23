import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 22, 'Ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 55, 'Directeur', 'homer.jpg'),
    new Candidat(3, 'marge', 'simpson', 44, 'Chef de projet', 'marge.jpeg'),
    new Candidat(4, 'nidhal', 'jelassi', 37, 'Consultant'),
  ];

  constructor() {}

  getAllCandidats() {
    return this.tabCandidats;
  }

  getCandidatById(targetId) {
    return this.tabCandidats.find((c) => c._id == targetId);
  }

  addCandidat(newCand) {
    newCand._id = this.tabCandidats[this.tabCandidats.length - 1]._id + 1;
    this.tabCandidats.push(newCand);
  }

  deleteCandidat(id) {
    let i = this.tabCandidats.findIndex((c) => c._id == id);
    this.tabCandidats.splice(i, 1);
  }

  updateCandidat(uCand) {
    let i = this.tabCandidats.indexOf(uCand);
    this.tabCandidats[i] = uCand;
  }
}
