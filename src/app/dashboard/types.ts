import { DashboardConfig } from './index/types';

export interface LoadDataOptions {
  /** 要加载的数据，为2024-2形式 */
  range: string;
  /** 是否跳过缓存 */
  skipCache?: boolean;
  /** 有效数据的MD5，取自list接口 */
  hash?: string;
  config?: DashboardConfig;
}

export enum ExtraNoteTypes {
  Covid19 = 'covid19',
}

export interface ExtraNote {
  type: ExtraNoteTypes;
  note: string;
}

export interface Value {
  value: number;
}

export interface CompareLastMonthValue {
  compareLastMonth: number;
}

export interface CompareLastMonthPercent {
  compareLastMonthPercent: number;
}

export type CompareLastMonth = CompareLastMonthValue & CompareLastMonthPercent;

export interface CompareLastYearValue {
  compareLastYear: number;
}

export interface CompareLastYearPercent {
  compareLastYearPercent: number;
}

export type CompareLastYear = CompareLastYearValue & CompareLastYearPercent;

export type ValueCompareFull = Value & CompareLastMonth & CompareLastYear;

export interface NewsItem {
  ch: string;
  cityCh: string;
  cityEn: string;
}

export interface NewsCategory {
  count: number;
  detail?: NewsItem[];
}

export interface News {
  operationLength: number;
  lines: NewsCategory;
  segments: NewsCategory;
  cities?: NewsItem[];
}

export interface City {
  id: string;
  number: number;
  city: string;
  lines: number;
  operationLength: number;
  passengerCapacity: number;
  inStationCapacity: number;
  passengerStrong?: number;
  transferCoefficient?: number;
}

export interface VolumeSummary {
  lines: number;
  operationLength: number;
  passengerCapacity: number;
  inStationCapacity: number;
}

export interface VolumeByCapacitySummary extends VolumeSummary {
  cities: number;
}

export interface DashboardDataSimple {
  hash?: string;
  id: string;
}

export interface DashboardData extends DashboardDataSimple {
  disabled?: boolean;
  year: number;
  month: number;
  days: number;
  cityCount: number;
  lines: number;
  operationLength: number;
  runs: number;
  passengerCapacity: ValueCompareFull;
  inStationCapacity: number;
  passengerStrong?: Value & Partial<CompareLastMonthPercent & CompareLastYearPercent>;
  news: News;
  off?: Partial<News>;
  largeVolume?: VolumeSummary;
  mediumVolume?: VolumeSummary;
  smallVolume?: VolumeSummary;
  metroVolume?: VolumeByCapacitySummary;
  monorailVolume?: VolumeByCapacitySummary;
  tramVolume?: VolumeByCapacitySummary;
  cities: City[];
  originLink?: string;
  summaries: string[];
  extraNotes?: ExtraNote[];
}

export type VolumeCompare = {
  [K in keyof VolumeSummary]: CompareLastMonthValue;
}

export type MonthCompare = {
  [K in keyof Pick<DashboardData,
    'passengerCapacity' |
    'inStationCapacity' |
    'passengerStrong'
  >]?: number;
} & { id: DashboardData['id']; };

export type CityCompare = {
  [K in keyof Pick<City,
    'passengerCapacity' |
    'inStationCapacity' |
    'passengerStrong'
  >]?: City[K];
} & { range: DashboardData['id']; };

export interface CityVM extends City {
  history?: CityCompare[];
  drilldownable?: boolean;
}

export interface DashboardDataVM extends DashboardData {
  monthCompare: MonthCompare[];
  inStationCapacityVM: Value & Partial<CompareLastMonth> & Partial<CompareLastYear>;
  passengerStrongVM: DashboardData['passengerStrong'] & Partial<CompareLastMonthValue> & Partial<CompareLastYearValue>;
  largeVolumeCompare: VolumeCompare;
  mediumVolumeCompare: VolumeCompare;
  smallVolumeCompare: VolumeCompare;
  metroVolumeCompare?: VolumeCompare;
  monorailVolumeCompare?: VolumeCompare;
  tramVolumeCompare?: VolumeCompare;
  cities: CityVM[];
  readonly calculatedFields: string[];
}
