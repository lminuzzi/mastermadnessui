import { TestBed } from '@angular/core/testing';

import { ChooseNameService } from './choose-name.service';

describe('ChooseNameService', () => {
  let service: ChooseNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
