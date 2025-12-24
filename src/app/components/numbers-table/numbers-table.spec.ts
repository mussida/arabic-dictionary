import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersTable } from './numbers-table';

describe('NumbersTable', () => {
  let component: NumbersTable;
  let fixture: ComponentFixture<NumbersTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbersTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
