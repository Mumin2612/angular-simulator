import { Directive, Input, HostListener, Renderer2, ElementRef } from '@angular/core';

export interface GradientConfiguration {
  delay?: number;
  colors?: string[];
  thickness?: string;
}

@Directive({
  selector: '[appGradientBorder]',
  standalone: true
})
export class GradientBorderDirective {
  @Input() public GradientConfiguration?: GradientConfiguration;
  private timer: any = null;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    const delay = this.GradientConfiguration?.delay ?? 1000;
    this.timer = setTimeout(() => {
      this.applyGradient();
    }, delay);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.removeGradient();
  }

  private applyGradient(): void {
    const colors = this.GradientConfiguration?.colors ?? ['#ff007f', '#7928ca'];
    const thickness = this.GradientConfiguration?.thickness ?? '2px';

    this.renderer.setStyle(this.el.nativeElement, 'border', `${thickness} solid transparent`);
    this.renderer.setStyle(
      this.el.nativeElement, 
      'backgroundImage', 
      `linear-gradient(white, white), linear-gradient(to right, ${colors.join(', ')})`
    );
    this.renderer.setStyle(this.el.nativeElement, 'backgroundOrigin', 'border-box');
    this.renderer.setStyle(this.el.nativeElement, 'backgroundClip', 'padding-box, border-box');
  }

  private removeGradient(): void {
    this.renderer.removeStyle(this.el.nativeElement, 'border');
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundImage');
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundOrigin');
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundClip');
  }
}