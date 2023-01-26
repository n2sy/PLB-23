import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServersService {
  tab = [
    {
      id: 1,
      nom: 'Serveur de Didier',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Serveur de Ai',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Serveur de Robin',
      statut: 'online',
    },
  ];

  getServerById(id) {
    return this.tab.find((s) => s.id == id);
  }

  constructor() {}
}
