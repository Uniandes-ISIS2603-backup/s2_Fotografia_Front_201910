import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagoDetailComponent } from './forma-de-pago-detail.component';

describe('FormaDePagoDetailComponent', () => {
  let component: FormaDePagoDetailComponent;
  let fixture: ComponentFixture<FormaDePagoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDePagoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
