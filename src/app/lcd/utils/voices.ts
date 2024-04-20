import type { StationDef, StationStatus, StationVoiceDef } from '../types';

export function travelVoices<T extends StationDef['voices'], U extends StationVoiceDef = StationVoiceDef>(
  voices: T,
  fn: (args: { voice: StationVoiceDef; status: StationStatus; lang: string; index: number; }) => U,
) {

  if (!voices) {
    return voices;
  }

  return Object.fromEntries(
    Object.entries(voices).map(([status, multiLangVoices]) => [
      status,
      Object.fromEntries(
        Object.entries(multiLangVoices).map(([lang, langVoices]) => [
          lang,
          langVoices.map((voice, index) => fn({
            voice,
            status: status as StationStatus,
            lang,
            index,
          })),
        ]),
      ),
    ]),
  );
}
