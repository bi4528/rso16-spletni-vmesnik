import { TestBed } from '@angular/core/testing';

import { UsercocktailService } from './usercocktail.service';

describe('UsercocktailService', () => {
  let service: UsercocktailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercocktailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
