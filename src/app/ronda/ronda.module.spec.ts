import { RondaModule } from './ronda.module';

describe('RondaModule', () => {
  let rondaModule: RondaModule;

  beforeEach(() => {
    rondaModule = new RondaModule();
  });

  it('should create an instance', () => {
    expect(rondaModule).toBeTruthy();
  });
});
