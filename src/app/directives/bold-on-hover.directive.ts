import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoldOnHover]',
  standalone: true
})
export class BoldOnHoverDirective {
  @HostBinding('style.fontWeight') public fontWeight: string = 'normal';
  constructor() {}

  @HostListener ('mouseenter') onMouseEnter() {
    this.fontWeight ='bold'
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.fontWeight ='normal'
  }
}
