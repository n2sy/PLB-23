import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-infos-server',
  templateUrl: './infos-server.component.html',
  styleUrls: ['./infos-server.component.css'],
})
export class InfosServerComponent {
  oneServer;
  showEditBtn;

  constructor(
    private actRoute: ActivatedRoute,
    private ser: ListServersService
  ) {}

  ngOnInit() {
    // this.oneServer = this.ser.getServerById(
    //   this.actRoute.snapshot.paramMap.get('id')
    // );

    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.oneServer = this.ser.getServerById(p.get('id'));
      },
    });

    this.actRoute.queryParamMap.subscribe({
      next: (p: ParamMap) => {
        this.showEditBtn = p.get('allowEdit') == '1' ? false : true;
      },
    });
  }
}
