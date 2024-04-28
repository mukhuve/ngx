import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: '[scrollh]', standalone: true })
export class ScrollhDirective {
  @Input('scrollhMultiplier')
  multiplier: number = 3;

  @HostListener('wheel', ['$event'])
  wheel(event: WheelEvent) {
    event.stopImmediatePropagation();
    event.preventDefault();
    const element = event.currentTarget as HTMLElement;
    const limit = element.scrollWidth - element.clientWidth;

    let left = element.scrollLeft + event.deltaY * this.multiplier;
    if (left <= 0) left = 0;
    if (left >= limit) left = limit;

    element.scrollTo({ left });
  }
}
