import { Pipe, PipeTransform, QueryList } from '@angular/core';

@Pipe({ name: 'filter', standalone: true })
export class FilterPipe implements PipeTransform {
  transform(items: any[] | QueryList<any>, search: string, keys?: string) {
    if (!items) return [];
    if (!search) return items;
    search = search?.toLowerCase();
    const result = items.filter((it) => {
      let str = '';
      if (typeof it === 'string') str = it || '';
      if (typeof it === 'object') {
        if (keys) {
          const keysArray = keys.split(',');
          const values = Object.entries(it)
            .filter(([k, _]) => keysArray.includes(k))
            .map(([_, v]) => v);
          str = values.join(' ') || '';
        } else str = Object.values(it).join(' ');
      }
      return str.toLowerCase().search(search) !== -1;
    });
    return result;
  }
}
