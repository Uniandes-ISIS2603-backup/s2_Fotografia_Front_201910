import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormaDePagoComponent } from './cliente-forma-de-pago.component';

describe('ClienteFormaDePagoComponent', () => {
  let component: ClienteFormaDePagoComponent;
  let fixture: ComponentFixture<ClienteFormaDePagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormaDePagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormaDePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
