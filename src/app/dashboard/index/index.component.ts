import { Component, Inject, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs';
import * as Sentry from '@sentry/angular-ivy';
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

  selectedId!: string;

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

  private _data?: DashboardDataVM;
  get data() {
    return this._data!;
  }

  set data(val: DashboardDataVM) {
    this.selectedId = val.id!;
    this._data = val;
    if (val.year && val.month) {
      this.title.setTitle(this.pageTitle);
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
    this.loading = true;
    const listItem = this.list[id];
    this.dataVMService.getDataVM({
      range: id,
      hash: listItem.hash,
    }).subscribe({
      next: (data) => {
        this.list = Object.assign({}, this.list, {
          [id]: data,
        });
        if (!skipLocationChange && this.selectedId !== id) {
          this.router.navigateByUrl(`/dashboard/${id}`);
        }

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
