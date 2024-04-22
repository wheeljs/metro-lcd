export interface LoadDataOptions {
  /** 要加载的数据，为2024-2形式 */
  range: string;
  /** 是否跳过缓存 */
  skipCache?: boolean;
  /** 有效数据的MD5，取自list接口 */
  hash?: string;
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

export type ValueComparePercent = Value & CompareLastMonthPercent & CompareLastYearPercent;

export interface NewLineItem {
  ch: string;
  cityCh: string;
  cityEn: string;
}

export interface NewLines {
  count: number;
  operationLength: number;
  detail?: NewLineItem[];
}

export interface NewSegments {
  count: number;
  detail?: NewLineItem[];
}

export interface City {
  number: number;
  city: string;
  lines: number;
  operationLength: number;
  passengerCapacity: number;
  inStationCapacity: number;
  passengerStrong: number;
}

export interface VolumeSummary {
  lines: number;
  operationLength: number;
  passengerCapacity: number;
  inStationCapacity: number;
}

export interface DashboardDataSimple {
  hash?: string;
  id?: string;
}

export interface DashboardData extends DashboardDataSimple {
  year: string;
  month: string;
  days: number;
  cityCount: number;
  lines: number;
  operationLength: number;
  runs: number;
  passengerCapacity: ValueCompareFull;
  inStationCapacity: number;
  passengerStrong: ValueComparePercent;
  newLines: NewLines;
  newSegments: NewSegments;
  largeVolume: VolumeSummary;
  mediumVolume: VolumeSummary;
  smallVolume: VolumeSummary;
  cities: City[];
  originLink?: string;
  summaries: string[];
}
