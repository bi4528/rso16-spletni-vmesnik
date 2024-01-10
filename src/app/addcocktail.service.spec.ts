import { TestBed } from '@angular/core/testing';

import { AddcocktailService } from './addcocktail.service';

describe('AddcocktailService', () => {
  let service: AddcocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
