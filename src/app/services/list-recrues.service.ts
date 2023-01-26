import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListRecruesService {
  private tabRecrues: Candidat[] = [];

  constructor() {}

  getAllRecrues() {
    return this.tabRecrues;
  }

  addRecrues(newRecrue) {
    if (this.tabRecrues.indexOf(newRecrue) == -1)
      this.tabRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recrutée !');
  }
}
