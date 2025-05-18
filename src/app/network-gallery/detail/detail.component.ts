import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';

@Component({
  selector: 'nga-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly domSanitizer = inject(DomSanitizer);

  readonly file$ = this.activatedRoute.paramMap.pipe(
    takeUntilDestroyed(),
    map((paramMap) => this.domSanitizer.bypassSecurityTrustResourceUrl(
      `/assets/network-gallery/${paramMap.get('file')}.svg`
    )),
  );
}
