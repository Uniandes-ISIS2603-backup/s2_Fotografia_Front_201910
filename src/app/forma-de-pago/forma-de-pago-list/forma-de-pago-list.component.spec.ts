import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagoListComponent } from './forma-de-pago-list.component';

describe('FormaDePagoListComponent', () => {
  let component: FormaDePagoListComponent;
  let fixture: ComponentFixture<FormaDePagoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaDePagoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaDePagoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
