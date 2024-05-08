import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedComponent } from './calculated.component';

describe('CalculatedComponent', () => {
  let component: CalculatedComponent;
  let fixture: ComponentFixture<CalculatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
