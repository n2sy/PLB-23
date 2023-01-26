import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  selectedStatut = '';
  allServers = [
    {
      nom: 'Test Development Server',
      type: 'small',
      date_d: new Date(),
      statut: 'critical',
    },
    {
      nom: 'Production Server',
      type: 'large',
      date_d: new Date(),
      statut: 'stable',
    },
    {
      nom: 'Development Server',
      type: 'small',
      date_d: new Date(),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
      type: 'medium',
      date_d: new Date(),
      statut: 'stable',
    },
  ];

  addServer() {
    this.allServers.push({
      nom: 'NEW SERVER',
      type: 'medium',
      date_d: new Date(),
      statut: 'stable',
    });
  }

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
