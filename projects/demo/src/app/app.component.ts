import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogConfig, DialogService } from '@mukhuve/ngx/dialog';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { SampleComponent } from './components/sample/sample.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    FormComponent,
    SampleComponent,
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
    const { dialog, text, dialogConfig } = this;
    dialog.open(SampleComponent, {
      inputs: { text },
      ...dialogConfig,
    });
  }
}
