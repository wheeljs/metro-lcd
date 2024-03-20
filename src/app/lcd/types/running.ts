import type { Station, Line } from './static';
import { StationStatus } from './static';

export interface RunningLineStation extends Station {
  status: StationStatus;
}

export interface RunningLine extends Line {
  from: RunningLineStation;
  to: RunningLineStation;
  stations: RunningLineStation[];
}
