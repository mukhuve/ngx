import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogModule } from 'projects/dialog/src/public-api';
import { TestComponent } from './components/test/test.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, FormsModule, DialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
