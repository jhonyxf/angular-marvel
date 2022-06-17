import { TestBed } from '@angular/core/testing';

import { PersonagensApiService } from './personagens-api.service';

describe('PersonagensApiService', () => {
  let service: PersonagensApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonagensApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
