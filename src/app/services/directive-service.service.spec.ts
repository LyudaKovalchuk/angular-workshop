import { TestBed, inject } from '@angular/core/testing';

import { DirectiveServiceService } from './directive-service.service';

describe('DirectiveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectiveServiceService]
    });
  });

  it('should be created', inject([DirectiveServiceService], (service: DirectiveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
