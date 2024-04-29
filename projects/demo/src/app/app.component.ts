import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { SampleComponent } from './components/sample/sample.component';
import { DialogService } from '@mukhuve/ngx/dialog';

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
  dialog = inject(DialogService);

  text: string = '';

  constructor() {
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

  openDialog() {
    this.dialog.open(SampleComponent, {
      type: 'shy',
    });
  }
}
