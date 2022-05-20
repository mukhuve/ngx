import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgForTrackByFieldDirective } from './directives/track-by-field.directive';

@NgModule({
  declarations: [NgForTrackByFieldDirective],
  imports: [CommonModule],
  exports: [],
})
export class UtilsModule {}
