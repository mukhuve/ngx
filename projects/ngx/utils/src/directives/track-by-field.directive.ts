import { NgForOf } from '@angular/common';
import { Directive, Host, Input } from '@angular/core';

@Directive({
  selector: '[ngForTrackByField]',
  standalone: true,
})
export class NgForTrackByFieldDirective {
  @Input()
  public ngForTrackByField: string = 'id';

  constructor(@Host() private ngFor: NgForOf<any>) {
    this.ngFor.ngForTrackBy = (index: number, item: any) => {
      if (this.ngForTrackByField) return item[this.ngForTrackByField];
      return item?.id || item;
    };
  }
}
