import { FotografoModule } from './fotografo.module';

describe('FotografoModule', () => {
  let fotografoModule: FotografoModule;

  beforeEach(() => {
    fotografoModule = new FotografoModule();
  });

  it('should create an instance', () => {
    expect(fotografoModule).toBeTruthy();
  });
});
