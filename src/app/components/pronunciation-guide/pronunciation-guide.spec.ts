import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronunciationGuide } from './pronunciation-guide';

describe('PronunciationGuide', () => {
  let component: PronunciationGuide;
  let fixture: ComponentFixture<PronunciationGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PronunciationGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronunciationGuide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
