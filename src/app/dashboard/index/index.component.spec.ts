import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: DashboardIndexComponent;
  let fixture: ComponentFixture<DashboardIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
