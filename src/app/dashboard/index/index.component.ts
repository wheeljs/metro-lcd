import { Component, Inject, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs';
import * as Sentry from '@sentry/angular-ivy';
import type { NzResultComponent } from 'ng-zorro-antd/result';
import { STORAGE } from '../../common';
import type { DashboardData, DashboardDataVM } from '../types';
import { DataService } from '../services';
import { DataVMService } from '../services/data-vm.service';
import type { DashboardConfig } from './types';
import { ChangelogService } from '../../app/changelog.service';

const DashboardConfigKey = 'dashboard-config';

@Component({
  selector: 'md-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class DashboardIndexComponent {

  selectedId: string | undefined;

  @Input() set range(val: string) {
    this.selectedId = val;
    if (this.ids.length) {
      this.rangeUpdate(val);
    }
  }

  list: Record<string, DashboardData | DashboardDataVM> = {};

  get ids() {
    return Object.keys(this.list);
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
    this.selectedId = val?.id;
    this._data = val;

    if (val) {
      if (val.year && val.month) {
        this.title.setTitle(this.pageTitle);
      }
    }
  }

  loading = true;

  _config: DashboardConfig = {
    showVolumeDiff: true,
  };

  get config() {
    return this._config;
  }

  set config(val: DashboardConfig) {
    this.localStorage[DashboardConfigKey] = JSON.stringify(val);
    this._config = val;
  }

  get reportUrl(): string {
    let reportUrl = 'https://github.com/wheeljs/rail-transit-data/issues/new?assignees=wheeljs&labels=data&template=data.md';
    if (this.data) {
      reportUrl += `&title=${encodeURIComponent(`Correct data in ${this.data.id}`)}`;
    }

    return reportUrl;
  }

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    private title: Title,
    @Inject(STORAGE) private localStorage: Storage,
    private dataService: DataService,
    private dataVMService: DataVMService,
    private changelogService: ChangelogService,
  ) {
    if (DashboardConfigKey in localStorage) {
      this._config = JSON.parse(localStorage[DashboardConfigKey]);
    }

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

        this.onRangeChange(this.selectedId || list[0].id!, true);
      },
    });
  }

  showChangelog() {
    this.changelogService.show();
  }

  onRangeChange(id: string, skipLocationChange = false) {
    const listItem = this.list[id];
    if (!listItem) {
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
        if (!skipLocationChange && this.selectedId !== id) {
          this.router.navigateByUrl(`/dashboard/${id}`, {
            replaceUrl: typeof this.status !== 'undefined',
          });
        }

        this.status = undefined;
        this.rangeUpdate(id);
      },
    });
  }

  rangeUpdate(id: string) {
    this.data = this.list[id] as DashboardDataVM;
    this.loading = false;
  }

  onShowVolumeDiffChange(checked: boolean) {
    this.config = {
      ...this.config,
      showVolumeDiff: checked,
    };
  }
}
