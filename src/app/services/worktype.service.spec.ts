import { TestBed } from '@angular/core/testing';

import { WorkTypeService } from './worktype.service';

describe('WorkTypeService', () => {
  let service: WorkTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});