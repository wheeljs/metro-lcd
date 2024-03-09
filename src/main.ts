import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

import { LcdModule } from './app/lcd/lcd.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LcdModule],
  template: `
    <lcd-container />
  `,
})
export class App {
  name = 'Angular';

  constructor() {}
}

bootstrapApplication(App);
