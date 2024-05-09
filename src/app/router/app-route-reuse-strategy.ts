import type { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class AppRouteReuseStrategy implements RouteReuseStrategy {
  private handlers: Record<string, DetachedRouteHandle> = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.data.reuseId != null;
  }

  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
    if (route.data.reuseId) {
      this.handlers[route.data.reuseId] = detachedTree;
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.data.reuseId && this.handlers[route.data.reuseId]) {
      return true;
    }
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.handlers[route.data.reuseId] ?? null;
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
