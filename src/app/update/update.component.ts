import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  updatedCandidat;
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
          this.updatedCandidat = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  submitHandler() {
    this.candSer.updateCandidatAPI(this.updatedCandidat).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
    });
  }
}
