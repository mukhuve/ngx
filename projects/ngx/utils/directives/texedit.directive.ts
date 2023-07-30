import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({ selector: '[texedit]', standalone: true })
export class TexeditDirective {
  @Output() edited = new EventEmitter<string>();

  input = document.createElement('input');
  content?: string;

  get target() {
    return this.el.nativeElement;
  }

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.content) return;

    this.content = this.target.textContent;
    this.input.value = this.content || '';
    this.target.innerHTML = '';
    this.target.appendChild(this.input);
    this.input.focus();
    this.input.addEventListener('blur', (e) => this.onBlur(e));
  }

  @HostListener('blur', ['$event'])
  onBlur(event: FocusEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (!this.content) return;

    this.content = undefined;
    this.target.innerHTML = '';
    this.target.textContent = this.input.value;
    this.edited.emit(this.input.value);
  }
}
