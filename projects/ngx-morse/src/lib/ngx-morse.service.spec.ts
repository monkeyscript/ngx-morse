import { TestBed } from '@angular/core/testing';

import { NgxMorseService } from './ngx-morse.service';

describe('NgxMorseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMorseService = TestBed.get(NgxMorseService);
    expect(service).toBeTruthy();
  });
});
