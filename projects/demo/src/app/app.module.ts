import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';
import { DialogModule, StepperModule } from 'projects/ngx/src/public-api';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, FormsModule, DialogModule, StepperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
