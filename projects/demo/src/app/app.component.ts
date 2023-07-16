import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogConfig, DialogService } from '@mukhuve/ngx';
import { TestComponent } from './components/test/test.component';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text: string = '';
  dialogConfig: DialogConfig = { type: 'window', disableAnimation: false };

  constructor(public dialog: DialogService) {}

  open() {
    const { dialog, text, dialogConfig } = this;
    dialog.open(TestComponent, {
      inputs: { text },
      ...dialogConfig,
    });
  }
}
