import type { RunningLine } from './running';

export interface ContainerConfig {
  /**
   * 当音频播放完毕后自动next
   */
  nextOnAudioEnded?: boolean;

  /**
   * `nextOnAudioEnded=true`时有效，自动移动下一站的间隔，单位ms，默认为0，即播放完成后直接下一站
   */
  nextGap?: number;

  /**
   * 是否编辑模式
   */
  editing?: boolean;

  /**
   * 线路起点
   */
  from?: RunningLine['id'];
  /**
   * 线路终点
   */
  to?: RunningLine['id'];
  /**
   * 暂缓开通站点
   */
  disabledStations: RunningLine['id'][];
}
