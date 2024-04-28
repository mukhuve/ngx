import { Pipe, PipeTransform } from '@angular/core';
import { autoTextColor } from '../helpers/colors.helper';

@Pipe({ name: 'contrast', standalone: true })
export class ContrastPipe implements PipeTransform {
  transform(color: string) {
    return autoTextColor(color);
  }
}
