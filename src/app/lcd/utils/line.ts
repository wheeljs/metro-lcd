import { environment } from '../../../environments/environment';
import type { Line, LineDef, Station, StationVoiceWithSubtitle } from '../types';
import Subtitles from './subtitle';
import { travelVoices } from './voices';

export function lineDefToStatic(lineDef: LineDef): Line {
  return {
    ...lineDef,
    stations: lineDef.stations.map((station) => {
      if (!station.voices) {
        return station;
      }

      return {
        ...station,
        voices: travelVoices(station.voices, ({ voice, status, lang }) => {
          let parsedVoiceItem;
          if (!voice) {
            return voice;
          } else if (typeof voice === 'string') {
            parsedVoiceItem = { voiceUrl: voice };
          } else {
            parsedVoiceItem = { ...voice };
          }
          parsedVoiceItem = parsedVoiceItem as StationVoiceWithSubtitle;
          if (lang && lang in environment.VoicesPrefix) {
            parsedVoiceItem.voiceUrl = environment.VoicesPrefix[lang] + parsedVoiceItem.voiceUrl;
          }

          if (!parsedVoiceItem!.subtitle) {
            // @ts-ignore
            parsedVoiceItem.subtitle = Subtitles[status]?.[lang]?.(station, parsedVoiceItem.subtitleConfig ?? {});
          }

          return parsedVoiceItem;
        }) as Station['voices'],
      };
    }) as Line['stations'],
  };
}
