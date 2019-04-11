import { FormaDePagoModule } from './forma-de-pago.module';

describe('FormaDePagoModule', () => {
  let formaDePagoModule: FormaDePagoModule;

  beforeEach(() => {
    formaDePagoModule = new FormaDePagoModule();
  });

  it('should create an instance', () => {
    expect(formaDePagoModule).toBeTruthy();
  });
});
