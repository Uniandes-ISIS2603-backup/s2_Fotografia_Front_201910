import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagoCreateComponent } from './forma-de-pago-create.component';

describe('FormaDePagoCreateComponent', () => {
  let component: FormaDePagoCreateComponent;
  let fixture: ComponentFixture<FormaDePagoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDePagoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
