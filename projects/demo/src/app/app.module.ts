import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'projects/ngx/src/public-api';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, FormsModule, DialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
