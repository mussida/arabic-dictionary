import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsTabs } from './sections-tabs';

describe('SectionsTabs', () => {
  let component: SectionsTabs;
  let fixture: ComponentFixture<SectionsTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionsTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
