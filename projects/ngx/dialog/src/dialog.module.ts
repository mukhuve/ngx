import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { DialogService } from './services/dialog.service';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [WrapperComponent],
  providers: [DialogService],
  imports: [OverlayModule],
  exports: [],
})
export class DialogModule {}
