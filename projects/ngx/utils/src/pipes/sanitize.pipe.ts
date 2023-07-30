import { Pipe, PipeTransform } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
  SafeScript,
  SafeStyle,
  SafeUrl
} from '@angular/platform-browser';

export type Sanitized =
  | SafeHtml
  | SafeStyle
  | SafeScript
  | SafeUrl
  | SafeResourceUrl;

@Pipe({ name: 'sanitize', standalone: true })
export class SanitizePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: any, type: string): Sanitized {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Unable to bypass security for type ${type}`);
    }
  }
}
