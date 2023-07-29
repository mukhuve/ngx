import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [
    ToastComponent,
    WrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToastModule { }
