import { Component } from '@angular/core';
import { DialogConfig, DialogService } from 'projects/ngx/src/public-api';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text: string = '';
  dialogConfig: DialogConfig = { type: 'window' };

  constructor(public dialog: DialogService) {}

  open() {
    const { dialog, text, dialogConfig } = this;
    dialog.open(TestComponent, {
      inputs: { text },
      ...dialogConfig,
    });
  }
}
