import { TestBed } from '@angular/core/testing';

import { QualificationRequiredService } from './qualificationrequired.service';

describe('QualificationRequiredService', () => {
  let service: QualificationRequiredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualificationRequiredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});