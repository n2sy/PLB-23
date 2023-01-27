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
    this.candSer
      .getCandidatByIdAPI(this.actRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response) => {
          this.searchCandidat = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  deleteHandler() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat')) {
      this.candSer.deleteCandidatAPI(this.searchCandidat._id).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
      });
    }
  }
}
