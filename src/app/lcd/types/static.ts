import { NameSimple, NameItem } from './common';

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

export type StationVoice = Record<string, (string | undefined)[]>;

export interface Station extends NameSimple {
  id: string;
  transfers?: TransferLine[];
  voices?: {
    [StationStatus.ArrivingSoon]: StationVoice;
    [StationStatus.Arrived]: StationVoice;
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
