export interface NameItem {
  prefix?: string;
  main: string;
  suffix?: string;
}

export interface LineSimple {
  id: string;
  nameCh: NameItem;
  nameEn: NameItem;
  color: string;
}

interface NameSimple {
  nameCh: string;
  nameEn: string;
}

interface TransferLine extends LineSimple {
  disabled?: boolean;
}

type StationVoice = Record<string, (string | undefined)[]>;

export interface Station extends NameSimple {
  id: string;
  transfers?: TransferLine[];
  voices?: {
    [StationStatus.ArrivingSoon]: StationVoice;
    [StationStatus.Arrived]: StationVoice;
  };
  disabled?: boolean;
}

export interface Line extends LineSimple {
  /**
   * 行进方向，'up'-上行, 'down'-下行
   */
  direction: 'up' | 'down';
  stations: Station[];
}

export enum StationStatus {
  /** 未在运营区间 */
  NotInService = 'not-in-service',
  /** 未到达 */
  OnTheWay = 'on-the-way',
  /** 下一站即将到达 */
  ArrivingSoon = 'arriving-soon',
  /** 已到达 */
  Arrived = 'arrived',
  /** 已过站 */
  Past = 'past',
}

export interface RunningLineStation extends Station {
  status: StationStatus;
}

export interface RunningLine extends Line {
  from: RunningLineStation;
  to: RunningLineStation;
  stations: RunningLineStation[];
}

export interface ContainerConfig {
  /**
   * 当音频播放完毕后自动next
   */
  nextOnAudioEnded?: boolean;
}
