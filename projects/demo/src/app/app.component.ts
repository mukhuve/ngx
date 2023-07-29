import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogConfig, DialogService } from '@mukhuve/ngx/dialog';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { ControlDirective } from './directives/control.directive';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FormComponent,
    ControlDirective,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text: string = '';
  dialogConfig: DialogConfig = { type: 'window', disableAnimation: false };

  constructor(public dialog: DialogService) {
    const match = window.matchMedia('(prefers-color-scheme: dark)');
    const preferDark = !('theme' in localStorage) && match?.matches;

    if (preferDark || localStorage['theme'] === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  mode(mode: 'dark' | 'light') {
    localStorage['theme'] = mode;
  }

  open() {
    // const { dialog, text, dialogConfig } = this;
    // dialog.open(TestComponent, {
    //   inputs: { text },
    //   ...dialogConfig,
    // });
  }
}
