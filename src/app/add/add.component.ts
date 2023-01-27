import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private candSer: ListCandidatsService, private router: Router) {}

  addNewCandidat(newCand) {
    this.candSer.addCandidat(newCand);
    this.router.navigateByUrl('/cv');
  }
}
