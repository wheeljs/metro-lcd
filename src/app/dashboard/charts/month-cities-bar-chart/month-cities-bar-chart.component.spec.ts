import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import type { DatasetComponentOption, ECElementEvent } from 'echarts';
import echarts from '../../../shared/echarts/custom-echarts';
import { MonthCitiesBarChartComponent } from './month-cities-bar-chart.component';

describe('MonthCitiesBarChartComponent', () => {
  let component: MonthCitiesBarChartComponent;
  let fixture: ComponentFixture<MonthCitiesBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxEchartsDirective],
      declarations: [MonthCitiesBarChartComponent],
      providers: [
        provideEchartsCore({ echarts }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthCitiesBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate correct options when set cities', () => {
    component.cities = [
      {
        id: 'shanghai',
        number: 1,
        city: '上海',
        lines: 22,
        operationLength: 864.8,
        passengerCapacity: 327607000,
        inStationCapacity: 181983000,
        passengerStrong: 1.26,
      }
    ];

    const citiesDataset = (component.merge.dataset as DatasetComponentOption[])[0];
    const citiesSource = citiesDataset.source as DatasetComponentOption['source'];
    expect((citiesSource as any[])[0]).toEqual({
      id: 'shanghai',
      number: 1,
      city: '上海',
      lines: 22,
      operationLength: 864.8,
      passengerCapacity: 32760.7,
      inStationCapacity: 18198.3,
      passengerStrong: 1.26,
    });
  });

  it('should show back button when drilldowned', async () => {
    await fixture.whenStable();
    component.onChartClick({
      value: {
        id: 'shanghai',
        drilldownable: true,
      },
    } as unknown as ECElementEvent);
    fixture.detectChanges();
    await fixture.whenStable();

    const backButton = fixture.debugElement.query(By.css('.toolbars button')).nativeElement as HTMLElement;
    expect(backButton).toBeTruthy();
  });
});
