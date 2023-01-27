import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    //console.log(this.actRoute.snapshot.params['id']);
    console.log(this.actRoute.snapshot.paramMap.get('id'));
    this.searchCandidat = this.candSer.getCandidatById(
      this.actRoute.snapshot.paramMap.get('id')
    );
  }

  deleteHandler() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat')) {
      this.candSer.deleteCandidat(this.searchCandidat._id);
      this.router.navigateByUrl('/cv');
    }
  }
}
