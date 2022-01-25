import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import {
  DIALOG_COMPONENT,
  DIALOG_CONFIG,
  WrapperComponent,
} from '../components/wrapper/wrapper.component';
import { DialogConfig } from '../types/config';
import { DialogRef } from '../types/reference';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T>(component: ComponentType<T>, config?: DialogConfig): DialogRef {
    let positionStrategy = this.overlay.position().global().centerVertically();

    if (config?.type === 'shy') positionStrategy = positionStrategy.right();
    else positionStrategy = positionStrategy.centerHorizontally();

    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      disposeOnNavigation: true,
      backdropClass: 'mkv-dialog-backdrop',
      panelClass: 'mkv-dialog-panel',
    });

    const dialogRef = new DialogRef(overlayRef);

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: DIALOG_COMPONENT, useValue: component },
        { provide: DIALOG_CONFIG, useValue: config },
        { provide: DialogRef, useValue: dialogRef },
      ],
    });

    const portal = new ComponentPortal(WrapperComponent, null, injector);
    overlayRef.attach(portal);

    return dialogRef;
  }
}
