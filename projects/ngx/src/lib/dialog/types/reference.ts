import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { DialogEvent } from './event';

export class DialogRef {
  private emiter = new Subject<DialogEvent>();

  constructor(private overlayRef: OverlayRef) {
    this.overlayRef.backdropClick().subscribe((_) => this.close());
    this.emiter.subscribe((e) => {
      if (e.type === 'afterclose') {
        this.overlayRef.dispose();
        this.emiter.complete();
      }
    });
  }

  public close(data?: any) {
    this.emiter.next({ type: 'beforeclose', data });
  }

  public emit(data: any) {
    this.emiter.next({ type: 'custom', data });
  }

  public get events() {
    return this.emiter.asObservable();
  }
}
