import type { StationVoiceWithSubtitle, Station, StationStatus, Line } from './static';

export type StationVoiceDef = string | StationVoiceWithSubtitle | undefined;

export type StationVoiceMultiLangsDef = Record<string, StationVoiceDef[]>;

export interface StationDef extends Omit<Station, 'voices'> {
  voices?: {
    [StationStatus.ArrivingSoon]: StationVoiceMultiLangsDef;
    [StationStatus.Arrived]: StationVoiceMultiLangsDef;
  };
}

export interface LineDef extends Omit<Line, 'stations'> {
  stations: StationDef[];
}
