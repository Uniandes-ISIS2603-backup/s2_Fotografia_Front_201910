import { TestBed, inject } from '@angular/core/testing';

import { FotografoService } from './fotografo.service';

describe('FotografoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FotografoService]
    });
  });

  it('should be created', inject([FotografoService], (service: FotografoService) => {
    expect(service).toBeTruthy();
  }));
});
