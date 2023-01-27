import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() allCandidats: Candidat[] = [];
  @Output() msgToCv = new EventEmitter();

  sendCandToCv(cand) {
    this.msgToCv.emit(cand);
  }

  // constructor(private candSer: ListCandidatsService) {}

  // ngOnInit() {
  //   this.allCandidats = this.candSer.getAllCandidats();
  // }

  // showCands() {
  //   console.log(this.candSer.getAllCandidats());
  // }
}
