import {TestBed} from '@angular/core/testing';

import {IngredientService} from './ingredient.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('IngredientService', () => {
  let service: IngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    }).compileComponents();
    service = TestBed.inject(IngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
