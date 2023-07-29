import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'app-control',
  standalone: true,
})
export class ControlDirective {
  @Input() type: string = 'text';

  constructor() {}
}
