import { QueryList } from '@angular/core';
import { Option } from '../directives/option.directive';
// import { secureStr } from '@mukhuve/ngx/utils'

import { MvBaseControl } from './control';

export abstract class AppOptionControl<T> extends MvBaseControl<T> {
  index: number = -1;
  options!: QueryList<Option>;
  current?: Option;

  override get empty() {
    return super.empty && !this.options?.some((o) => !o.value);
  }

  constructor() {
    super();
    const afterViewInit = this.constructor.prototype.ngAfterViewInit;
    this.constructor.prototype.ngAfterViewInit = function (...args: any[]) {
      this.options?.changes.subscribe(() => this.refresh());
      afterViewInit?.apply(this, args);
    };
  }

  indexOf(value: T) {
    const options = this.options?.toArray() ?? [];
    // return options.findIndex((o) => secureStr(o.value) === secureStr(value));
    return options.findIndex((o) => o.value === value);
  }

  override refresh() {
    super.refresh();
    this.index = this.indexOf(this.value);
    this.current =
      this.index != -1 ? this.options?.get(this.index) : Option.waitOption();
    console.log(this.index != -1, this.current);
  }
}
