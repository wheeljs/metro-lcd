import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import * as Sentry from '@sentry/angular';
import 'zone.js';

import { environment } from './environments/environment';
import { STORAGE } from './app/common';
import { AppModule } from './app/app.module';

if (!environment.disableSentry) {
  Sentry.init({
    dsn: 'https://431ab5bcf2c9a5c6fccab44dcc90b5ae@o4505188035133440.ingest.us.sentry.io/4506915449929728',
    integrations: [
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    // Session Replay
    replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

platformBrowser([
  { provide: STORAGE, useFactory: () => localStorage },
]).bootstrapModule(AppModule, { applicationProviders: [provideZoneChangeDetection()], })
  .catch((err) => console.error(err));
