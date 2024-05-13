import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDataComponent } from './monthly-data.component';

describe('MonthlyDataComponent', () => {
  let component: MonthlyDataComponent;
  let fixture: ComponentFixture<MonthlyDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MonthlyDataComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
