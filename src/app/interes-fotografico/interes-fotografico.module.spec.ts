import { InteresFotograficoModule } from './interes-fotografico.module';

describe('InteresFotograficoModule', () => {
  let interesFotograficoModule: InteresFotograficoModule;

  beforeEach(() => {
    interesFotograficoModule = new InteresFotograficoModule();
  });

  it('should create an instance', () => {
    expect(interesFotograficoModule).toBeTruthy();
  });
});
