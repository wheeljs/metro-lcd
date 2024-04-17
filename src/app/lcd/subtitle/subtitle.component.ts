import { Component } from '@angular/core';
import { map } from 'rxjs';
import { RunningLineService } from '../running-line.service';

@Component({
  selector: 'lcd-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.scss',
})
export class SubtitleComponent {
  subtitle$ = this.runningLineService.playlist$.pipe(
    map((voices) => {
      const subtitles: string[][] = [];
      for (let i = 0; i < voices.length; i++) {
        const voice = voices[i];

        if (i === 0) {
          subtitles.push([voice.subtitle!]);
          continue;
        }
        const prevVoice = voices[i - 1];
        if (voice.lang === prevVoice.lang) {
          subtitles.at(-1)?.push(voice.subtitle!);
        } else {
          subtitles.push([voice.subtitle!]);
        }
      }

      return subtitles.map(row => row.join(''));
    }),
  );

  constructor(private runningLineService: RunningLineService) {}
}
