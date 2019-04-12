import { TestBed } from '@angular/core/testing';

import { InteresFotograficoService } from './interes-fotografico.service';

describe('InteresFotograficoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InteresFotograficoService = TestBed.get(InteresFotograficoService);
    expect(service).toBeTruthy();
  });
});
