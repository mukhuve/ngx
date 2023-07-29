import { Component, ContentChildren, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlDirective } from '../../directives/control.directive';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ContentChildren(ControlDirective)
  controls: ControlDirective[] = [];

  constructor() {}

  ngOnInit() {
    console.log(this.controls);
  }
}
