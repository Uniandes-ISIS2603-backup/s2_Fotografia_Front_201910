import { JuradoModule } from './jurado.module';

describe('JuradoModule', () => {
  let juradoModule: JuradoModule;

  beforeEach(() => {
    juradoModule = new JuradoModule();
  });

  it('should create an instance', () => {
    expect(juradoModule).toBeTruthy();
  });
});