import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ToastService {
  constructor() {}

  open(message?: string | TemplateRef<any>, options?: any) {
    console.log('open: ', message, options);
  }
}
