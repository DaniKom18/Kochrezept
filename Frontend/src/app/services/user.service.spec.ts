import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
