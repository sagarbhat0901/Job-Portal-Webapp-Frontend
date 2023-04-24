import { TestBed } from '@angular/core/testing';

import { JobExperienceService } from './jobexperience.service';

describe('JobExperienceService', () => {
  let service: JobExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});