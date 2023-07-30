import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

export interface Triggerable {
  handleTrigger(name: string, ...args: any[]): void;
}

@Directive({ selector: '[triggerFor]', standalone: true })
export class TriggerFor {
  @Input('triggerFor')
  public triggerable!: Triggerable;

  @Input()
  public triggerName = 'default';

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click')
  click() {
    this.triggerable.handleTrigger(this.triggerName, this.viewContainerRef);
  }
}
