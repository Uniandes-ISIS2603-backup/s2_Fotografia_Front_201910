import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagoEditComponent } from './forma-de-pago-edit.component';

describe('FormaDePagoEditComponent', () => {
  let component: FormaDePagoEditComponent;
  let fixture: ComponentFixture<FormaDePagoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDePagoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
