import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'order', standalone: true })
export class OrderPipe implements PipeTransform {
  transform(
    arr: any[] = [],
    key: string = 'order',
    order: 'asc' | 'desc' = 'asc'
  ): any[] | null | undefined {
    return arr?.sort((a, b) => {
      let aVal = a;
      let bVal = b;

      if (typeof a === 'object') aVal = a[key];
      if (typeof b === 'object') bVal = b[key];
      if (aVal == null || aVal === undefined) return order === 'asc' ? -1 : 1;
      if (bVal == null || bVal === undefined) return order === 'asc' ? 1 : -1;
      if (typeof aVal !== 'string') aVal = aVal.toString();
      if (typeof bVal !== 'string') bVal = bVal.toString();

      return order === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    });
  }
}
