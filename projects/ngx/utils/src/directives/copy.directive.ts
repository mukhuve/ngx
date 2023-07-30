import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: '[copy]', standalone: true })
export class CopyDirective {
  @Input()
  copy: string = '';

  @HostListener('click', ['$event'])
  onClick(e: MouseEvent) {
    if (!this.copy) return;

    e.stopImmediatePropagation();
    navigator?.clipboard?.writeText(this.copy);
  }
}
