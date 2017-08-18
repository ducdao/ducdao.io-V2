import { TestBed, inject } from '@angular/core/testing';

import { GetCardsService } from './get-cards.service';

describe('GetCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCardsService]
    });
  });

  it('should be created', inject([GetCardsService], (service: GetCardsService) => {
    expect(service).toBeTruthy();
  }));
});
