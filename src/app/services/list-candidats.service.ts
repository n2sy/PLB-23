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

  addCandidat() {
    this.tabCandidats.push(
      new Candidat(1, 'NEW', 'CANDIDAT', 22, 'Ingénieur', 'bart.jpeg')
    );
  }
}
