import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  searchCandidat: Candidat;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: ListCandidatsService
  ) {}

  ngOnInit() {
    //console.log(this.actRoute.snapshot.params['id']);
    console.log(this.actRoute.snapshot.paramMap.get('id'));
    this.searchCandidat = this.candSer.getCandidatById(
      this.actRoute.snapshot.paramMap.get('id')
    );
  }
}
