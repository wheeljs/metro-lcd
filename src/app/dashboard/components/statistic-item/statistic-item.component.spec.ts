import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, LOCALE_ID } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NzStatisticComponent } from 'ng-zorro-antd/statistic';
import { StatisticItemComponent } from './statistic-item.component';
import { Units } from '../../pipes/unit.pipe';

@Component({
  template: `
    <md-statistic-item
      [value]="value"
      [unit]="unit"
      [percent]="percent"
      [autoPrefix]="autoPrefix"
      [prefixMode]="prefixMode"
      [autoColor]="autoColor"
    ></md-statistic-item>
  `
})
class TestHostComponent {
  value = 0;
  unit!: keyof typeof Units;
  percent = false;
  autoPrefix = false;
  prefixMode = 'arrow';
  autoColor = false;
}

describe('StatisticItemComponent', () => {
  let component: TestHostComponent;
  let nzStatistic: NzStatisticComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NzStatisticComponent,
        FontAwesomeModule,
      ],
      declarations: [
        StatisticItemComponent,
        TestHostComponent,
      ],
      providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    nzStatistic = fixture.debugElement.query(By.directive(NzStatisticComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(nzStatistic).toBeInstanceOf(NzStatisticComponent);
  });

  it('should update nzPrefix when value changes', () => {
    component.value = 1;
    fixture.detectChanges();
    const statisticItem: StatisticItemComponent = fixture.debugElement.children[0].componentInstance;
    expect(statisticItem.nzPrefix).toBeUndefined();

    component.autoPrefix = true;
    fixture.detectChanges();
    expect(statisticItem.nzPrefix).toBeDefined();
  });

  it('should calculate nzSuffix correctly', () => {
    component.unit = '亿';
    fixture.detectChanges();
    const statisticItem: StatisticItemComponent = fixture.debugElement.children[0].componentInstance;
    expect(statisticItem.nzSuffixProp).toEqual('亿');
    expect(nzStatistic.nzSuffix).toEqual('亿');
  });

  it('should calculate nzValue correctly', () => {
    component.value = 1e8;
    component.unit = '亿';
    fixture.detectChanges();
    const statisticItem: StatisticItemComponent = fixture.debugElement.children[0].componentInstance;
    expect(statisticItem.nzValue).toEqual('1');

    component.value = 1;
    component.percent = true;
    fixture.detectChanges();
    expect(statisticItem.nzValue).toEqual('100%');
  });

  it('should render correct prefix icon when value changes', () => {
    component.autoPrefix = true;
    fixture.detectChanges();

    component.value = 1;
    fixture.detectChanges();
    let prefixIcon = fixture.debugElement.query(By.css('.fa-arrow-up'));
    expect(prefixIcon).not.toBeNull();

    component.value = -1;
    fixture.detectChanges();
    prefixIcon = fixture.debugElement.query(By.css('.fa-arrow-down'));
    expect(prefixIcon).not.toBeNull();
  });

  it('should render correct prefix icon when prefixMode invalid', () => {
    component.autoPrefix = true;
    component.prefixMode = 'not-exists-mode';
    fixture.detectChanges();

    component.value = 1;
    fixture.detectChanges();
    let prefixIcon = fixture.debugElement.query(By.css('.fa-arrow-up'));
    expect(prefixIcon).not.toBeNull();

    component.value = -1;
    fixture.detectChanges();
    prefixIcon = fixture.debugElement.query(By.css('.fa-arrow-down'));
    expect(prefixIcon).not.toBeNull();
  });

  it('should have correct class when autoColor', () => {
    component.autoColor = true;
    component.value = 1;
    fixture.detectChanges();

    let element = fixture.debugElement.query(By.css('.md-statistic-item--positive'));
    expect(element).not.toBeNull();

    component.value = -1;
    fixture.detectChanges();
    element = fixture.debugElement.query(By.css('.md-statistic-item--negative'));
    expect(element).not.toBeNull();
  });
});
