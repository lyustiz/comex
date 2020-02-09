import { TestBed } from '@angular/core/testing';

import { HttpHandlerErrorService } from './http-handler-error.service';

describe('HttpHandlerErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpHandlerErrorService = TestBed.get(HttpHandlerErrorService);
    expect(service).toBeTruthy();
  });
});
