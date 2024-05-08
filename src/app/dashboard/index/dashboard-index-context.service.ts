import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { produce, type Draft } from 'immer';

export interface Context {
  calculatedFields?: string[];
}

// @ts-ignore
type ProduceRecipe<T> = Parameters<typeof produce<T, Draft<T>>>[1];

@Injectable()
export class DashboardIndexContextService {
  private contextSubject = new BehaviorSubject<Context>({});

  context$ = this.contextSubject.asObservable();

  get context(): Context {
    return this.contextSubject.getValue();
  }

  constructor() { }

  update(updateContext: ProduceRecipe<Context>) {
    this.contextSubject.next(
      produce(this.context, updateContext),
    );
  }
}
