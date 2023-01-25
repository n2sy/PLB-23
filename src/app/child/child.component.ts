import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() txtColor = 'red';
  @Output() msgToParent = new EventEmitter();

  sendMessage() {
    this.msgToParent.emit('Message de la part du Child');
  }
}
