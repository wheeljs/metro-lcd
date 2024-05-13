import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LeftOutline } from '@ant-design/icons-angular/icons';
import { AppRoutingModule } from '../../../app-routing.module';
import { SettingsComponent } from './settings.component';

@Component({
  template: `
    <ng-template #template let-collapsed>
      <div id="content">{{collapsed ? 'Collapsed' : 'Expanded'}}</div>
    </ng-template>
    <md-settings [settings]="template"></md-settings>
  `,
})
class TestHostComponent {
  @ViewChild('template') template!: TemplateRef<any>;
}

describe('SettingsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        NzDividerComponent,
        NzIconModule.forRoot([LeftOutline]),
        NgClickOutsideDirective,
      ],
      declarations: [
        SettingsComponent,
        TestHostComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle collapsed state when trigger is clicked', () => {
    const trigger = fixture.debugElement.query(By.css('.md-settings__trigger-container'));
    trigger.triggerEventHandler('click', null);
    fixture.detectChanges();

    const content = fixture.debugElement.query(By.css('#content')).nativeElement as HTMLElement;
    expect(content.textContent).toBe('Expanded');
  });

  it('should hide content when visible is false', async () => {
    const settingsComponent: SettingsComponent = fixture.debugElement.query(By.directive(SettingsComponent)).componentInstance;
    settingsComponent.visible = false;
    fixture.detectChanges();
    await fixture.whenStable();

    const settingsElement = fixture.debugElement.query(By.css('.md-settings')).nativeElement as HTMLElement;
    expect(settingsElement.hidden).toBeTrue();
  });

  it('should show content when visible is true', async () => {
    const settingsComponent: SettingsComponent = fixture.debugElement.query(By.directive(SettingsComponent)).componentInstance;
    settingsComponent.visible = true;
    fixture.detectChanges();
    await fixture.whenRenderingDone();

    const settingsElement = fixture.debugElement.query(By.css('.md-settings')).nativeElement as HTMLElement;
    expect(settingsElement.hidden).toBeFalse();
  });

  it('should hide content after hideDelay when visible is set to true', fakeAsync(() => {
    const settingsComponent: SettingsComponent = fixture.debugElement.query(By.directive(SettingsComponent)).componentInstance;
    settingsComponent.visible = true;
    fixture.detectChanges();

    tick(settingsComponent.hideDelay);

    fixture.detectChanges();
    const settingsElement = fixture.debugElement.query(By.css('.md-settings')).nativeElement as HTMLElement;
    expect(settingsElement.hidden).toBeTrue();
  }));
});
