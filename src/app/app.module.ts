import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler(),
    },
    { provide: Sentry.TraceService, deps: [Router] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
