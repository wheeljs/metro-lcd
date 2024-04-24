import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthCitiesBarChartComponent } from './month-cities-bar-chart.component';

describe('MonthCitiesBarChartComponent', () => {
  let component: MonthCitiesBarChartComponent;
  let fixture: ComponentFixture<MonthCitiesBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthCitiesBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthCitiesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
