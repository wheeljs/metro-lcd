import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { CalculatedComponent } from './calculated.component';
import { DashboardIndexContextService } from '../../index/dashboard-index-context.service';
import { STORAGE } from '../../../common';

describe('CalculatedComponent', () => {
  let component: CalculatedComponent;
  let fixture: ComponentFixture<CalculatedComponent>;
  let contextService: DashboardIndexContextService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzTooltipDirective],
      declarations: [CalculatedComponent],
      providers: [
        { provide: STORAGE, useFactory: () => localStorage },
        DashboardIndexContextService,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedComponent);
    component = fixture.componentInstance;
    contextService = TestBed.inject(DashboardIndexContextService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate fieldCalculated correctly', () => {
    contextService.context.calculatedFields = ['field1'];
    component.field = 'field1';
    expect(component.fieldCalculated).toBeTrue();

    component.field = 'field2';
    expect(component.fieldCalculated).toBeFalse();
  });

  it('should calculate calculated correctly with force', () => {
    component.force = true;
    expect(component.calculated).toBeTrue();
  });

  it('should calculate calculated correctly without force', () => {
    contextService.context.calculatedFields = ['field1'];
    component.field = 'field1';
    expect(component.calculated).toBeTrue();
  });

  it('should calculate always correctly', () => {
    component.force = true;
    contextService.context.config = { alwaysShowCalculated: true };
    expect(component.always).toBeTrue();
  });

  it('should calculate nzTooltipTrigger correctly', () => {
    component.force = true;
    expect(component.nzTooltipTrigger).toEqual('hover');

    component.force = false;
    expect(component.nzTooltipTrigger).toBeNull();
  });
});
