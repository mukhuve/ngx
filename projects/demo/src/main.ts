import { bootstrapApplication } from '@angular/platform-browser';
import { DialogModule } from '@mukhuve/ngx/dialog';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(DialogModule)],
});
