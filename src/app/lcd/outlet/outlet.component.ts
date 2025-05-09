import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as Lines from '../defs/';
import { ContainerConfigService } from '../container-config.service';
import { RunningLineService } from '../running-line.service';
import { Line } from '../types';

@Component({
  selector: 'lcd-outlet',
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.scss',
  providers: [RunningLineService, ContainerConfigService],
  standalone: false,
})
export class OutletComponent {
  lines = Object.values(Lines);

  line!: Line;

  constructor(private title: Title) {
    this.onLineChange(this.lines[0]);
  }

  onLineChange(selectedLine: Line) {
    this.title.setTitle(selectedLine.ui.title || 'Metro LCD');
    this.line = selectedLine;
  }
}
