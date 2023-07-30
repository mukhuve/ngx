import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { ToastService } from './services/toast.service';

@NgModule({
  declarations: [],
  providers: [ToastService],
  imports: [OverlayModule],
  exports: [],
})
export class ToastModule {}
