import { TestBed } from '@angular/core/testing';

import { InteractionService } from './interaction.service';

describe('InteractionServiceService', () => {
  let service: InteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
