import { Component } from '@angular/core';

@Component({
  selector: 'app-home-accounts',
  templateUrl: './home-accounts.component.html',
  styleUrls: ['./home-accounts.component.css'],
})
export class HomeAccountsComponent {
  listAccounts = [
    {
      nom: 'Didier Account',
      statut: 'active',
    },
    {
      nom: 'Ai Account',
      statut: 'inactive',
    },
  ];

  addNewAccount(newAcc) {
    this.listAccounts.push(newAcc);
  }
}
