import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagoDeleteComponent } from './forma-de-pago-delete.component';

describe('FormaDePagoDeleteComponent', () => {
  let component: FormaDePagoDeleteComponent;
  let fixture: ComponentFixture<FormaDePagoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDePagoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
