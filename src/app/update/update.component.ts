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
    this.updatedCandidat = this.candSer.getCandidatById(
      this.actRoute.snapshot.paramMap.get('id')
    );
  }

  submitHandler() {
    this.candSer.updateCandidat(this.updatedCandidat);
    this.router.navigateByUrl('/cv');
  }
}
