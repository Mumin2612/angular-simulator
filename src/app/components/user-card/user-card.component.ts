import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { PhonePipe } from "../../pipes/phone.pipe";
import { BoldOnHoverDirective } from '../../directives/bold-on-hover.directive';
import { GradientBorderDirective } from '../../directives/gradient-border.directive';

@Component({
  selector: 'app-user-card',
  imports: [UpperCasePipe, PhonePipe, BoldOnHoverDirective, GradientBorderDirective],
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
