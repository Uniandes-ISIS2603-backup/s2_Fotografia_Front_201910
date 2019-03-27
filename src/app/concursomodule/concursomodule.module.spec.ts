import { ConcursomoduleModule } from './concursomodule.module';

describe('ConcursomoduleModule', () => {
  let concursomoduleModule: ConcursomoduleModule;

  beforeEach(() => {
    concursomoduleModule = new ConcursomoduleModule();
  });

  it('should create an instance', () => {
    expect(concursomoduleModule).toBeTruthy();
  });
});
