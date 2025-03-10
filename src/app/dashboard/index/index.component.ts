import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, map, merge, tap } from 'rxjs';
import * as Sentry from '@sentry/angular-ivy';
import type { NzResultComponent } from 'ng-zorro-antd/result';
import type { DashboardData, DashboardDataVM } from '../types';
import { DataService } from '../services';
import { DataVMService } from '../services/data-vm.service';
import type { DashboardConfig, DashboardIndexSettingsForm } from './types';
import { ChangelogService } from '../../app/changelog.service';
import { DashboardIndexContextService } from './dashboard-index-context.service';

@Component({
  selector: 'md-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  providers: [
    DashboardIndexContextService,
  ],
  standalone: false,
})
export class DashboardIndexComponent {

  private _range: string | undefined;

  get range(): string | undefined {
    return this._range;
  }

  @Input() set range(val: string) {
    if (val === 'latest') {
      val = this.entries[0]?.[0];
    }

    this._range = val;
    if (this.entries.length) {
      this.onRangeChange(val, true);
    }
  }

  list: Record<string, DashboardData | DashboardDataVM> = {};

  get entries() {
    return Object.entries(this.list);
  }

  get pageTitle() {
    if (!this.data) {
      return 'Dashboard'
    }

    const { year, month } = this.data;
    return `${year}年${month}月城市轨道交通运营数据`;
  }

  status?: NzResultComponent['nzStatus'];

  private _data: DashboardDataVM | undefined;

  get data() {
    return this._data!;
  }

  set data(val: DashboardDataVM | undefined) {
    this._range = val?.id;
    this._data = val;

    this.dashboardIndexContextService.update((draft) => {
      draft.calculatedFields = Array.isArray(val?.calculatedFields) ? val.calculatedFields : [];
    });
    this.title.setTitle(this.pageTitle);
  }

  loading = true;

  get config() {
    return this.dashboardIndexContextService.context.config;
  }

  set config(val: DashboardConfig) {
    this.dashboardIndexContextService.updateConfig(val);
  }

  get reportUrl(): string {
    let reportUrl = 'https://github.com/wheeljs/rail-transit-data/issues/new?assignees=wheeljs&labels=data&template=data.md';
    if (this.data) {
      reportUrl += `&title=${encodeURIComponent(`Correct data in ${this.data.id}`)}`;
    }

    return reportUrl;
  }

  settingsForm!: DashboardIndexSettingsForm;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    activatedRoute: ActivatedRoute,
    private title: Title,
    private dataService: DataService,
    private dataVMService: DataVMService,
    private changelogService: ChangelogService,
    private dashboardIndexContextService: DashboardIndexContextService,
  ) {
    this.setupSettingsForm();

    activatedRoute.paramMap
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (paramMap) => {
          const range = paramMap.get('range');
          Sentry.metrics.increment('dashboard_view', 1, {
            tags: {
              range: range || 'latest',
            },
          });
        },
      });

    this.dataService.list().pipe(
      tap(() => this.loading = true),
      filter(() => Object.keys(this.list).length === 0),
      takeUntilDestroyed(),
    ).subscribe({
      next: (list) => {
        const listMap: Record<string, DashboardData> = {};
        list.forEach(data => {
          listMap[data.id!] = data;
        });
        this.list = listMap;

        this.onRangeChange(this.range || list[0].id!, true);
      },
    });
  }

  showChangelog() {
    this.changelogService.show();
  }

  setupSettingsForm() {
    const settingsForm = this.settingsForm = this.formBuilder.group({
      alwaysShowCalculated: this.config.alwaysShowCalculated ?? false,
      showVolumeDiff: this.config.showVolumeDiff ?? true,
      dataRange: [6, [
        Validators.min(6),
        Validators.max(12),
      ]],
    });

    merge(
      ...Object.keys(settingsForm.controls)
        .map((key) => settingsForm.get(key)!.valueChanges.pipe(map(x => ({ [key]: x }))))
    ).subscribe({
      next: (value) => {
        this.config = value;
      },
    });
  }

  onRangeChange(id: string, skipLocationChange = false) {
    const listItem = this.list[id];
    if (!listItem || listItem.disabled) {
      this.data = undefined;
      this.status = '404';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.dataVMService.getDataVM({
      range: id,
      hash: listItem.hash,
    }).subscribe({
      next: (data) => {
        this.list = Object.assign({}, this.list, {
          [id]: data,
        });

        if (!skipLocationChange && this.range !== id) {
          this.router.navigateByUrl(`/dashboard/${id}`, {
            replaceUrl: typeof this.status !== 'undefined',
          });
        }

        this.status = undefined;
        this.data = this.list[id] as DashboardDataVM;
        this.loading = false;
      },
    });
  }

  onConfigChange(key: keyof DashboardConfig, value: DashboardConfig[typeof key]) {
    this.config = {
      [key]: value,
    };
  }
}
