import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, type Observable, concat, first, share, pairwise, tap, map } from 'rxjs';
import { produce, type Draft } from 'immer';
import type { DashboardConfig } from './types';
import { STORAGE } from '../../common';

export interface Context {
  config: DashboardConfig;
  calculatedFields?: string[];
}

// @ts-ignore
type ProduceRecipe<T> = Parameters<typeof produce<T, Draft<T>>>[1];

const DashboardConfigKey = 'dashboard-config';
const DashboardConfigVersion = 1;

@Injectable()
export class DashboardIndexContextService {
  private contextSubject = new BehaviorSubject<Context>({
    config: {
      showVolumeDiff: true,
    },
  });

  context$: Observable<Context> = this.contextSubject.asObservable();

  get context(): Context {
    return this.contextSubject.getValue();
  }

  constructor(@Inject(STORAGE) private localStorage: Storage) {
    this.restore();
  }

  update(updateContext: ProduceRecipe<Context>): Context {
    const nextContext = produce(this.context, updateContext);
    this.contextSubject.next(
      nextContext
    );

    return nextContext;
  }

  updateConfig(config: Partial<DashboardConfig>) {
    if (!config || Object.keys(config).length === 0) {
      return;
    }

    const nextContext = this.update((draft) => {
      Object.entries(config).forEach(([key, value]) => {
        (draft.config as any)[key] = value;
      });
    });
    this.store(nextContext.config);
  }

  private restore() {
    if (DashboardConfigKey in this.localStorage) {
      const { version, config } = JSON.parse(this.localStorage[DashboardConfigKey]);
      if (version === DashboardConfigVersion) {
        this.updateConfig(config);
      }
    }
  }

  private store(config: Context['config']) {
    this.localStorage[DashboardConfigKey] = JSON.stringify({ config, version: DashboardConfigVersion });
  }
}
