import {
  AfterContentInit,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingComponent } from '../../../../demo/src/app/ux/components/loading/loading.component';

/**
 * @summary
 * Displays LoadingComponent or passed template while waiting for the observable
 * @example
 * ```html
 * <div *wait="observable$; value as post"> {{post.summary}} </div>
 * ```
 * or for more customization
 *
 * ```html
 * <ng-template #empty> no items </ng-template>
 * <ng-template #loading> Loading... </ng-template>
 * <mycomponent *wait="observable$; value as post; loader: loading; empty: empty" > {{ post.summary }} </mycomponent>
 * ```
 */
@Directive({ selector: '[wait]', standalone: true })
export class WaitDirective implements AfterContentInit {
  private observable$?: Observable<any>;

  @Input() waitEmpty?: TemplateRef<any> = this.tref;
  @Input() waitLoader?: TemplateRef<any>;

  @Input() set wait(value$: Observable<any>) {
    this.observable$ = value$;
    this.to('loader');
    const subscription = value$?.subscribe((value) => {
      const isEmpty = Array.isArray(value) ? value.length === 0 : !value;
      const state = isEmpty && this.waitEmpty ? 'empty' : 'content';
      this.to(state, { value });
      subscription?.unsubscribe();
    });
  }

  constructor(private tref: TemplateRef<any>, private vref: ViewContainerRef) {}

  ngAfterContentInit() {
    this.to(this.observable$ ? 'loader' : 'empty');
  }

  to(state: 'empty' | 'loader' | 'content', context?: any) {
    this.vref.clear();
    console.log(state, context);
    switch (state) {
      case 'empty':
        this.vref.createEmbeddedView(this.waitEmpty || this.tref);
        break;
      case 'loader':
        if (this.waitLoader) this.vref.createEmbeddedView(this.waitLoader);
        else this.vref.createComponent(LoadingComponent);
        break;
      default:
        this.vref.createEmbeddedView(this.tref, context);
        break;
    }
  }
}
