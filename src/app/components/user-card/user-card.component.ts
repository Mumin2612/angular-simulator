import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input({ required: true }) user!: any;

  @Output() deleteUser= new EventEmitter<number>() 


  toogle() {
    this.deleteUser.emit(this.user.id)
  }
}
