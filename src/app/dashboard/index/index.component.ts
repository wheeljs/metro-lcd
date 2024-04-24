import { Component, Inject, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { STORAGE } from '../../common';
import type { DashboardData, DashboardDataVM } from '../types';
import { DataService } from '../services';
import { DataVMService } from '../services/data-vm.service';
import type { DashboardConfig } from './types';

const DashboardConfigKey = 'dashboard-config';

@Component({
  selector: 'md-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class DashboardIndexComponent {
  faSliders = faSliders;

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

  opened = false;

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
    private title: Title,
    @Inject(STORAGE) private localStorage: Storage,
    private dataService: DataService,
    private dataVMService: DataVMService,
  ) {
    if (DashboardConfigKey in localStorage) {
      this._config = JSON.parse(localStorage[DashboardConfigKey]);
    }

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

  onShowVolumeDiffChange(event: MatSlideToggleChange) {
    this.config = {
      ...this.config,
      showVolumeDiff: event.checked,
    };
  }
}
