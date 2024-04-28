import { ComponentType } from '@angular/cdk/portal';
import {
  Component,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Injector,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DialogRef } from '../../types/reference';
import { DialogConfig, DialogType } from '../../types/config';

export const DIALOG_COMPONENT = new InjectionToken('DIALOG_COMPONENT');
export const DIALOG_CONFIG = new InjectionToken('DIALOG_CONFIG');

@Component({
  selector: 'mv-dialog-wrapper',
  template: `<ng-container #container></ng-container> `,
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent<C> implements OnInit {
  @ViewChild('container', { static: true, read: ViewContainerRef })
  private container!: ViewContainerRef;

  @HostBinding('class')
  private classes: string = '';

  @HostBinding('class.closing')
  private closing: boolean = false;

  @HostBinding('class.responsive')
  private responsive: boolean = false;

  @HostBinding('class.no-animate')
  private disableAnimation: boolean = false;

  @HostBinding('attr.type')
  private type: DialogType = 'window';

  constructor(
    @Inject(DIALOG_COMPONENT) private component: ComponentType<C>,
    @Inject(DIALOG_CONFIG) private config: DialogConfig,
    private injector: Injector,
    private render: Renderer2,
    private ref: DialogRef
  ) {
    this.type = config.type || 'window';
    this.classes = config.classes || '';
    this.responsive = config.responsive == undefined ? true : config.responsive;
    this.disableAnimation = config.disableAnimation || false;
    this.ref.events.subscribe((e) => {
      this.closing = e.type === 'beforeclose';
      if (config.disableAnimation) this.animationend();
    });
  }

  ngOnInit() {
    const { injector, container, component, config } = this;
    const { inputs } = (component as any)?.ɵcmp || {};

    container.clear();
    const ref = container.createComponent<C>(component, { injector });

    for (let k of Object.keys(inputs)) {
      const value = (config.inputs || {})[k];
      if (value !== undefined) (ref.instance as any)[k] = value;
    }
    this.render.addClass(ref.location.nativeElement, 'mv-dialog-content');
  }

  @HostListener('animationend')
  animationend() {
    if (this.closing) (this.ref as any).emiter.next({ type: 'afterclose' });
  }

  @HostListener('document:keydown.escape', ['$event'])
  close(event: KeyboardEvent) {
    event.stopImmediatePropagation();
    this.ref.close();
  }
}
