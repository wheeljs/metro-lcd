import { lineName } from '../line-name.pipe';
import { type Station, StationStatus } from '../types';

type Lang = string;

enum Doors {
  Left = 'left',
  Right = 'right',
  Both = 'both',
}

const DoorsDesc: Record<Doors, { [key: Lang]: string; }> = {
  [Doors.Left]: {
    ch: '左边',
    en: 'the left',
  },
  [Doors.Right]: {
    ch: '右边',
    en: 'the right',
  },
  [Doors.Both]: {
    ch: '双侧',
    en: 'both sides',
  },
}

export interface SubtitleGenerateOptions {
  side?: Doors;
  terminal?: boolean;
  transfer?: boolean;
};

interface SubtitleGenerator {
  (station: Station, options: SubtitleGenerateOptions): string;
}

interface SubtitleHelper {
  [StationStatus.ArrivingSoon]: Record<Lang, SubtitleGenerator>;
  [StationStatus.Arrived]: Record<Lang, SubtitleGenerator>;
}

function transfer(transfers: Station['transfers'], lang: Lang): string {
  if (!Array.isArray(transfers)) {
    return '';
  }
  if (lang === 'ch') {
    return `可换乘${transfers.map(transfer => lineName(transfer.nameCh).toLowerCase()).join('，')}，请注意换乘列车的首末班车时间。`;
  }

  return `You can transfer to ${transfers.map(transfer => lineName(transfer.nameEn).toLowerCase()).join(', ')}. `;
}

export const Subtitles: SubtitleHelper = {
  [StationStatus.ArrivingSoon]: {
    ch: (station, { side = 'left', terminal, transfer: isTransfer } = {}) => {
      if (isTransfer) {
        return transfer(station.transfers, 'ch');
      }
      return `下一站${terminal ? '终点站' : ''}${station.nameCh}，开${DoorsDesc[side as Doors].ch}门。`
    },
    en: (station, { side = 'left', terminal } = {}) => `Next station ${terminal ? 'is the terminal station ' : ''}${station.nameEn.replace('<br>', ' ')}. ${transfer(station.transfers, 'en')}Doors will open on ${DoorsDesc[side as Doors].en}.`,
  },
  [StationStatus.Arrived]: {
    ch: (station, { side = 'left', terminal } = {}) => `${terminal ? '终点站' : ''}${station.nameCh}到了，开${DoorsDesc[side as Doors].ch}门。`,
    en: (station, { side = 'left', terminal } = {}) => `We are now at ${terminal ? 'the terminal station ' : ''}${station.nameEn.replace('<br>', ' ')}. Doors will open on ${DoorsDesc[side as Doors].en}.`,
  },
};

export default Subtitles;
