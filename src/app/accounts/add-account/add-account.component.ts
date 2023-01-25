import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent {
  nameAcc = '';
  statutAcc = '';

  @Output() msgToHome = new EventEmitter();

  sendNewAccount() {
    this.msgToHome.emit({
      nom: this.nameAcc,
      statut: this.statutAcc,
    });
  }
}
