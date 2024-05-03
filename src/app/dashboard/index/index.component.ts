import { Component, HostListener, Inject, Input, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, filter, map, pairwise, tap } from 'rxjs';
import { throttle } from 'lodash-es';
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
export class DashboardIndexComponent implements OnDestroy {
  private showSettingsTimer?: number;
  private _showSettings = false;

  settingsCollapsed = true;

  set showSettings(val: boolean) {
    this._showSettings = val;
    if (val) {
      this.clearShowSettingsTimer();

      this.showSettingsTimer = setTimeout(() => {
        if (this.settingsCollapsed) {
          this.showSettings = false;
        }
      }, 2000);
    }
  }

  get showSettings() {
    return this._showSettings;
  }

  mouseMoveSubject = new Subject<PointerEvent | null>();

  mouseMove$ = this.mouseMoveSubject.pipe(
    takeUntilDestroyed(),
    pairwise(),
    filter(([prev, current]) => {
      const xDiff = Math.abs(prev!.clientX - current!.clientX);
      const yDiff = Math.abs(prev!.clientY - current!.clientY);
      return xDiff > 20 || yDiff > 20;
    }),
    map(([_, current]) => current),
  );

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
    this.mouseMove$.subscribe({ next: () => this.showSettings = true });

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

        this.onRangeChange(this.selectedId || list[0].id!);
      },
    });
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove = throttle((event: PointerEvent) => {
    this.mouseMoveSubject.next(event);
  }, 500);

  ngOnDestroy() {
    this.clearShowSettingsTimer();
  }

  private clearShowSettingsTimer() {
    if (this.showSettingsTimer) {
      clearTimeout(this.showSettingsTimer);
    }
  }

  onSettingsClick() {
    this.clearShowSettingsTimer();
  }

  showChangelog() {
    this.changelogService.show();
  }

  onRangeChange(id: string) {
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
        if (this.selectedId !== id) {
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
