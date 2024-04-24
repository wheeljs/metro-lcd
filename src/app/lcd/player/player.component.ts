import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';

interface ControlsContext {
  play: () => void;
  pause: () => void;
  next: () => boolean;
}

@Component({
  selector: 'lcd-player',
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent implements AfterViewInit, ControlsContext {
  @Input() controls?: TemplateRef<ControlsContext>;

  @Input() disabled? = false;

  private _playlist!: string[];
  @Input() set playlist(val: string[]) {
    this._playlist = [...val];
    this.playingIndex = -1;

    this.next();
  }

  @Output() ended = new EventEmitter<void>();

  @ViewChild('audio') audio!: ElementRef<HTMLAudioElement>;

  private autoplay = false;

  private playingIndex = -1;

  get playing() {
    return this._playlist?.[this.playingIndex];
  }

  get context() {
    return {
      play: this.play.bind(this),
      pause: this.pause.bind(this),
      next: this.next.bind(this),
    };
  }

  ngAfterViewInit() {
    if (this.playing && this.playingIndex !== 0) {
      this.audio.nativeElement.play();
    }
  }

  play() {
    this.autoplay = true;
    this.audio?.nativeElement?.play?.();
  }

  pause() {
    this.autoplay = false;
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
    if (this.autoplay || this.playingIndex !== 0) {
      el.play();
    }
  }

  audioEnded() {
    if (!this.next()) {
      this.ended.emit();
    }
  }
}
