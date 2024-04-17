import type { SubtitleGenerateOptions } from '../utils/subtitle';
import type { NameSimple, NameItem } from './common';

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

export interface StationVoiceWithSubtitle {
  voiceUrl: string;
  /**
   * 声音对应的字幕
   */
  subtitle?: string;
  /**
   * 生成字幕参数，如果`subtitle`存在将被忽略，仅用于自动生成字幕时
   */
  subtitleConfig?: SubtitleGenerateOptions;
  /**
   * 音频的语言，在Line Normalize时会自动检测
   *
   * 在<lcd-subtitle>显示字幕时，若前后两段音频语言一致则显示在同一行，否则分行显示
   */
  readonly lang?: string;
}

export interface Station extends NameSimple {
  id: string;
  transfers?: TransferLine[];
  voices?: {
    [StationStatus.ArrivingSoon]: Record<string, (StationVoiceWithSubtitle | undefined)[]>;
    [StationStatus.Arrived]: Record<string, (StationVoiceWithSubtitle | undefined)[]>;
  };
  disabled?: boolean;
}

export interface LineSimple {
  id: string;
  nameCh: NameItem;
  nameEn: NameItem;
  color: string;
}

export interface TransferLine extends LineSimple {
  disabled?: boolean;
}

export interface LineUI {
  title: string;
  /**
   * 线路前景色，LCD的部分组件会使用该颜色。部分线路标识色颜色较深时可将前景色改为白色。默认为#000
   */
  foregroundColor?: string;
}

export interface Line extends LineSimple {
  ui: LineUI;
  /**
   * 行进方向，'up'-上行, 'down'-下行
   */
  direction: 'up' | 'down';
  stations: Station[];
}
