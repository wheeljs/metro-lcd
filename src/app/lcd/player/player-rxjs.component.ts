import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Observable,
  Subject,
  BehaviorSubject,
  Subscription,
  zip,
  withLatestFrom,
} from 'rxjs';
import {
  tap,
  map,
  filter,
  first,
  zipWith,
  distinct,
  share,
  combineLatestWith,
} from 'rxjs/operators';

@Component({
  selector: 'lcd-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  private subscription: Subscription;

  private audioSubject = new BehaviorSubject<HTMLAudioElement | null>(null);
  private loadeddataSubject = new Subject<string>();
  private playingSubject = new BehaviorSubject<string>('');
  playing$!: Observable<any>;

  private _playlist!: string[];
  @Input() set playlist(val: string[]) {
    this._playlist = [...val];

    this.next();
  }

  @ViewChild('audio') set audio(value: ElementRef<HTMLAudioElement>) {
    this.audioSubject.next(value?.nativeElement);
  }

  constructor() {
    const loadeddata$ = this.loadeddataSubject.pipe(
      distinct(),
      tap((value) => {
        console.log(`canplaythrough=${value}`);
      })
    );

    const playing$ = (this.playing$ = this.playingSubject.pipe(
      filter((x) => x?.length > 0),
      combineLatestWith(this.audioSubject),
      tap(([value, audio]) => {
        console.log(`playing=${value}`, audio);
        audio?.load?.();
      }),
      map(([value]) => value),
      share()
    ));

    this.subscription = zip([loadeddata$, playing$])
      .pipe(
        tap(([loadeddata, playing]) =>
          console.log(`merged: loadeddata=${loadeddata}, playing=${playing}`)
        ),
        filter(([loadeddata, playing]) => loadeddata === playing),
        combineLatestWith(this.audioSubject)
      )
      .subscribe(([, audio]) => audio?.play?.());
  }

  next(): boolean {
    const next = this._playlist.shift();
    if (!next) {
      return false;
    }

    this.playingSubject.next(next);
    return true;
  }

  audioLoaded(event: Event) {
    const el = event.target as HTMLAudioElement;
    this.loadeddataSubject.next(new URL(el.src).pathname);
  }

  audioEnded(event: Event) {
    this.next();
  }
}
