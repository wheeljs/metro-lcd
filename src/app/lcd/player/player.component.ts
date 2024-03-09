import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'lcd-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent implements AfterViewInit {
  @Output() ended = new EventEmitter<void>();

  private playingIndex = -1;

  private _playlist!: string[];
  @Input() set playlist(val: string[]) {
    this._playlist = [...val];
    this.playingIndex = -1;

    this.next();
  }

  get playing() {
    return this._playlist?.[this.playingIndex];
  }

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    if (this.playing && this.playingIndex !== 0) {
      this.audio.nativeElement.play();
    }
  }

  play() {
    this.audio?.nativeElement?.play?.();
  }

  pause() {
    this.audio?.nativeElement?.pause?.();
  }

  next(): boolean {
    const nextIndex = this.playingIndex + 1;
    if (nextIndex === this._playlist?.length) {
      return false;
    }

    this.playingIndex = nextIndex;
    setTimeout(() => this.audio?.nativeElement?.load?.());
    return true;
  }

  audioLoaded(event: Event) {
    const el = event.target as HTMLAudioElement;
    if (this.playingIndex !== 0) {
      el.play();
    }
  }

  audioEnded() {
    if (!this.next()) {
      this.ended.emit();
    }
  }
}
