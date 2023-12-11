import { TestBed } from '@angular/core/testing';

import { OpenapiApiService } from './openapi-api.service';

describe('OpenapiApiService', () => {
  let service: OpenapiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenapiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
