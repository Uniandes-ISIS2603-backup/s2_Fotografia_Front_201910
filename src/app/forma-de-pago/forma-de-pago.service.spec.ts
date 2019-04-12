import { TestBed } from '@angular/core/testing';

import { FormaDePagoService } from './forma-de-pago.service';

describe('FormaDePagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormaDePagoService = TestBed.get(FormaDePagoService);
    expect(service).toBeTruthy();
  });
});
