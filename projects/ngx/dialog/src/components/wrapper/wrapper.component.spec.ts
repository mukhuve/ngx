import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperComponent } from './wrapper.component';

describe('DialogComponent', () => {
  let component: WrapperComponent<any>;
  let fixture: ComponentFixture<WrapperComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
