import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownableChartComponent } from './drilldownable-chart.component';

describe('DrilldownableChartComponent', () => {
  let component: DrilldownableChartComponent;
  let fixture: ComponentFixture<DrilldownableChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrilldownableChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrilldownableChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
