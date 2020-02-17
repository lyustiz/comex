import { TestBed } from '@angular/core/testing';

import { EjecutivoService } from './ejecutivo.service';

describe('EjecutivoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EjecutivoService = TestBed.get(EjecutivoService);
    expect(service).toBeTruthy();
  });
});
