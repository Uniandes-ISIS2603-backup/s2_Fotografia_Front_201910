import { ConcursoModule } from './concurso.module';

describe('ConcursoModule', () => {
  let concursoModule: ConcursoModule;

  beforeEach(() => {
    concursoModule = new ConcursoModule();
  });

  it('should create an instance', () => {
    expect(concursoModule).toBeTruthy();
  });
});
