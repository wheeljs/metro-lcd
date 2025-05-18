import { ChangeDetectionStrategy, Component } from '@angular/core';

type NetworkImageInfo = {
  name: string;
  path: string;
  lastUpdated: Date;
};

@Component({
  selector: 'nga-index',
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {
  networks: NetworkImageInfo[] = [
    {
      name: '济南快速公交线网图',
      path: 'brt-network',
      lastUpdated: new Date(2025, 4, 17),
    },
    {
      name: '唐冶公交线网图',
      path: 'tangye',
      lastUpdated: new Date(2023, 6, 17),
    },
  ];
}
