import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [DialogComponent],
  imports: [OverlayModule],
  exports: [DialogComponent],
})
export class DialogModule {}
