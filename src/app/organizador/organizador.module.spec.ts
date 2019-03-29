import { OrganizadorModule } from './organizador.module';

describe('OrganizadorModule', () => {
  let organizadorModule: OrganizadorModule;

  beforeEach(() => {
    organizadorModule = new OrganizadorModule();
  });

  it('should create an instance', () => {
    expect(organizadorModule).toBeTruthy();
  });
});

