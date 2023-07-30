import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor as CVA,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive()
export abstract class MvBaseControl<T = any> implements CVA, Validator {
  private onChange = (...args: any[]) => {};
  private onTouched = (...args: any[]) => {};
  private onValidationChange = (...args: any[]) => {};

  private _value!: T;
  protected disabled?: boolean;

  @Input()
  key?: string;

  @Input()
  set value(val: T) {
    this.writeValue(val);
  }

  get value(): T {
    return this._value;
  }

  get empty() {
    if (Array.isArray(this._value)) return !this._value?.length;
    return !(this.value ?? false);
  }

  constructor() {
    const onInit = this.constructor.prototype.ngOnInit as Function;
    this.constructor.prototype.ngOnInit = function (...args: any[]) {
      if (this.key) {
        const value = localStorage.getItem(this.key);
        if (value) this.value = JSON.parse(value);
      }
      onInit?.apply(this, args);
    };
    const afterViewInit = this.constructor.prototype.ngAfterViewInit;
    this.constructor.prototype.ngAfterViewInit = function (...args: any[]) {
      this.refresh();
      afterViewInit?.apply(this, args);
    };
  }

  refresh() {}

  writeValue(val: T) {
    this._value = val;
    this.onTouched();
    this.onChange(this._value);
    if (this.key) {
      localStorage.setItem(this.key, JSON.stringify(this.value));
      if (this.value === null || this.value === undefined)
        localStorage.removeItem(this.key);
    }
    this.refresh();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn || (() => {});
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn || (() => {});
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
  }
}
