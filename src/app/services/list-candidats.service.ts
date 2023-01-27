import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private tabCandidats: Candidat[] = [
    // new Candidat(1, 'bart', 'simpson', 22, 'Ingénieur', 'bart.jpeg'),
    // new Candidat(2, 'homer', 'simpson', 55, 'Directeur', 'homer.jpg'),
    // new Candidat(3, 'marge', 'simpson', 44, 'Chef de projet', 'marge.jpeg'),
    // new Candidat(4, 'nidhal', 'jelassi', 37, 'Consultant'),
  ];

  constructor(private http: HttpClient) {}

  getAllCandidats() {
    return this.tabCandidats;
  }
  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  getCandidatById(targetId) {
    return this.tabCandidats.find((c) => c._id == targetId);
  }

  getCandidatByIdAPI(targetId): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.link}/${targetId}`);
  }

  addCandidat(newCand) {
    newCand._id = this.tabCandidats[this.tabCandidats.length - 1]._id + 1;
    this.tabCandidats.push(newCand);
  }

  addCandidatAPI(newCand) {
    // let token = localStorage.getItem('myToken');
    // if (token) {
    //   let headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    //   return this.http.post(this.link, newCand, { headers });
    // }
    return this.http.post(this.link, newCand);
  }

  deleteCandidat(id) {
    let i = this.tabCandidats.findIndex((c) => c._id == id);
    this.tabCandidats.splice(i, 1);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  updateCandidat(uCand) {
    let i = this.tabCandidats.indexOf(uCand);
    this.tabCandidats[i] = uCand;
  }

  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }
}
