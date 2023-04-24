import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverletterComponent } from './coverletter.component';

describe('CoverletterComponent', () => {
  let component: CoverletterComponent;
  let fixture: ComponentFixture<CoverletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
