import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [FirstService],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  recupererSelectedCandidat(cand) {
    this.selectedCandidat = cand;
  }

  constructor(
    private firstSer: FirstService,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit() {
    this.firstSer.showInfos();
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (response) => {
        this.tabCandidats = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addNewCandidat() {
    //this.candSer.addCandidat();
  }

  showCands() {
    console.log(this.candSer.getAllCandidats());
  }
}
