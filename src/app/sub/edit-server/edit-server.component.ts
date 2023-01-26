import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServersService } from '../list-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent {
  editedServer;

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
        this.editedServer = this.ser.getServerById(p.get('id'));
      },
    });
  }
}
