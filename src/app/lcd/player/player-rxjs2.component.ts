import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, zip } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'lcd-player',
  template: `
    <audio #audioPlayer controls [src]="playing$ | async" (canplaythrough)="onCanPlayThrough($event)" (ended)="onEnded()"></audio>
  `,
})
export class PlayerComponent implements AfterViewInit, OnChanges {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  @Input() playlist!: string[];

  playingSubject = new BehaviorSubject<string>('');
  loadeddataSubject = new BehaviorSubject<string>('');

  playing$ = this.playingSubject.asObservable();

  currentIndex = 0; // 新增的属性，用于跟踪当前播放的资源

  ngAfterViewInit() {
    this.playing$.subscribe(() => this.audioPlayer.nativeElement.load());

    zip(
      this.playingSubject.pipe(
        tap((val) => console.log(`[playingSubject] ${val}`))
      ),
      this.loadeddataSubject.pipe(
        filter((x) => x?.length > 0),
        tap((val) => console.log(`[loadeddataSubject] ${val}`))
      )
    ).subscribe(([playing, loaded]) => {
      console.log(`[zipped] `, playing, loaded);
      if (playing === loaded) {
        this.audioPlayer.nativeElement.play();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['playlist'] && this.playlist.length > 0) {
      this.changeSrc(this.playlist[0]);
    }
  }

  onCanPlayThrough(event: Event) {
    this.loadeddataSubject.next(
      new URL((event.target as HTMLAudioElement).src).pathname
    );
  }

  // 当前资源播放结束时，自动播放下一个资源
  onEnded() {
    this.currentIndex++;
    if (this.currentIndex < this.playlist.length) {
      this.changeSrc(this.playlist[this.currentIndex]);
    }
  }

  // 你可以在需要的地方调用这个方法来改变audio的src
  changeSrc(newSrc: string) {
    console.log('changeSrc', newSrc);
    this.playingSubject.next(newSrc);
  }
}
