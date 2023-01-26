import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    //console.log(this.actRoute.snapshot.params['id']);
    console.log(this.actRoute.snapshot.paramMap.get('id'));
  }
}
