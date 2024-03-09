import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitorComponent } from './splitor.component';

describe('SplitorComponent', () => {
  let component: SplitorComponent;
  let fixture: ComponentFixture<SplitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
