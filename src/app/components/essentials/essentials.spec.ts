import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Essentials } from './essentials';

describe('Essentials', () => {
  let component: Essentials;
  let fixture: ComponentFixture<Essentials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Essentials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Essentials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
