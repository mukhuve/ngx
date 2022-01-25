import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [WrapperComponent],
  imports: [OverlayModule],
  exports: [],
})
export class DialogModule {}
