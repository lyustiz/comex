import { TestBed } from '@angular/core/testing';

import { SucursalService } from './sucursal_old.service';

describe('SucursalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SucursalService = TestBed.get(SucursalService);
    expect(service).toBeTruthy();
  });
});
