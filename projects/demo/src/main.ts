import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { DialogModule } from '@mukhuve/ngx/dialog';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(DialogModule)
  ],
});
