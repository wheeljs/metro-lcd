import { prevRangeId, toVM } from './vm';
import type { DashboardData } from '../types';

const testDashboardData: DashboardData = {
  year: 2024,
  month: 4,
  cityCount: 54,
  lines: 310,
  operationLength: 10273.7,
  runs: 3380000,
  passengerCapacity: {
    value: 2760000000,
    compareLastMonth: -50000000,
    compareLastMonthPercent: -0.016,
    compareLastYear: 220000000,
    compareLastYearPercent: 0.088,
  },
  inStationCapacity: 1650000000,
  passengerStrong: {
    value: 0.896,
    compareLastMonthPercent: 0.013,
    compareLastYearPercent: 0.024,
  },
  largeVolume: {
    lines: 270,
    operationLength: 9576.4,
    passengerCapacity: 2710000000,
    inStationCapacity: 1610000000,
  },
  mediumVolume: {
    lines: 7,
    operationLength: 202.5,
    passengerCapacity: 37970000,
    inStationCapacity: 27570000,
  },
  smallVolume: {
    lines: 33,
    operationLength: 494.8,
    passengerCapacity: 11230000,
    inStationCapacity: 10690000,
  },
  news: {
    cities: [],
    operationLength: 34.1,
    lines: {
      count: 1,
      detail: [
        { ch: "青岛地铁6号线", cityCh: "青岛", cityEn: "qingdao" },
      ],
    },
    segments: {
      count: 1,
      detail: [
        {
          ch: "绍兴地铁1号线支线南段",
          cityCh: "绍兴",
          cityEn: "shaoxing",
        },
      ],
    },
  },
  off: {
    cities: [{ ch: "珠海市", cityCh: "珠海", cityEn: "zhuhai" }],
    operationLength: 8.4,
    lines: {
      count: 1,
      detail: [
        { ch: "珠海有轨电车1号线", cityCh: "珠海", cityEn: "zhuhai" },
      ],
    },
  },
  id: "2024-4",
  days: 30,
  originLink: "https://mp.weixin.qq.com/s/wjkwqMmmbZF7fTFhAVAMDg",
  cities: [
    {
      id: "shanghai",
      number: 1,
      city: "上海",
      lines: 22,
      operationLength: 864.8,
      passengerCapacity: 327607000,
      inStationCapacity: 181983000,
      passengerStrong: 1.26,
    },
    {
      id: "beijing",
      number: 2,
      city: "北京",
      lines: 27,
      operationLength: 836,
      passengerCapacity: 314253000,
      inStationCapacity: 173421000,
      passengerStrong: 1.25,
    },
    {
      id: "guangzhou",
      number: 3,
      city: "广州",
      lines: 18,
      operationLength: 641.5,
      passengerCapacity: 260704000,
      inStationCapacity: 141610000,
      passengerStrong: 1.35,
    },
    {
      id: "chengdu",
      number: 4,
      city: "成都",
      lines: 14,
      operationLength: 601.7,
      passengerCapacity: 189841000,
      inStationCapacity: 108226000,
      passengerStrong: 1.05,
    },
    {
      id: "shenzhen",
      number: 5,
      city: "深圳",
      lines: 17,
      operationLength: 567.1,
      passengerCapacity: 250134000,
      inStationCapacity: 141129000,
      passengerStrong: 1.47,
    },
    {
      id: "wuhan",
      number: 6,
      city: "武汉",
      lines: 15,
      operationLength: 529.6,
      passengerCapacity: 130247000,
      inStationCapacity: 82462000,
      passengerStrong: 0.82,
    },
    {
      id: "hangzhou",
      number: 7,
      city: "杭州",
      lines: 12,
      operationLength: 516,
      passengerCapacity: 128567000,
      inStationCapacity: 77140000,
      passengerStrong: 0.83,
    },
    {
      id: "chongqing",
      number: 8,
      city: "重庆",
      lines: 11,
      operationLength: 494.6,
      passengerCapacity: 125222000,
      inStationCapacity: 77900000,
      passengerStrong: 0.84,
    },
    {
      id: "nanjing",
      number: 9,
      city: "南京",
      lines: 15,
      operationLength: 472.3,
      passengerCapacity: 99120000,
      inStationCapacity: 58373000,
      passengerStrong: 0.7,
    },
    {
      id: "qingdao",
      number: 10,
      city: "青岛",
      lines: 9,
      operationLength: 357,
      passengerCapacity: 44234000,
      inStationCapacity: 30749000,
      passengerStrong: 0.43,
    },
    {
      id: "tianjin",
      number: 11,
      city: "天津",
      lines: 9,
      operationLength: 298.3,
      passengerCapacity: 56684000,
      inStationCapacity: 35561000,
      passengerStrong: 0.63,
    },
    {
      id: "xian",
      number: 12,
      city: "西安",
      lines: 9,
      operationLength: 294,
      passengerCapacity: 117235000,
      inStationCapacity: 75909000,
      passengerStrong: 1.33,
    },
    {
      id: "zhengzhou",
      number: 13,
      city: "郑州",
      lines: 10,
      operationLength: 277.7,
      passengerCapacity: 62782000,
      inStationCapacity: 37685000,
      passengerStrong: 0.75,
    },
    {
      id: "shenyang",
      number: 14,
      city: "沈阳",
      lines: 11,
      operationLength: 262.2,
      passengerCapacity: 54746000,
      inStationCapacity: 35004000,
      passengerStrong: 0.7,
    },
    {
      id: "suzhou",
      number: 15,
      city: "苏州",
      lines: 8,
      operationLength: 258.5,
      passengerCapacity: 52710000,
      inStationCapacity: 32192000,
      passengerStrong: 0.68,
    },
    {
      id: "dalian",
      number: 16,
      city: "大连",
      lines: 6,
      operationLength: 237.1,
      passengerCapacity: 23036000,
      inStationCapacity: 16841000,
      passengerStrong: 0.32,
    },
    {
      id: "changsha",
      number: 17,
      city: "长沙",
      lines: 7,
      operationLength: 209.1,
      passengerCapacity: 86454000,
      inStationCapacity: 46443000,
      passengerStrong: 1.38,
    },
    {
      id: "hefei",
      number: 18,
      city: "合肥",
      lines: 5,
      operationLength: 197,
      passengerCapacity: 46308000,
      inStationCapacity: 27740000,
      passengerStrong: 0.78,
    },
    {
      id: "ningbo",
      number: 19,
      city: "宁波",
      lines: 6,
      operationLength: 186,
      passengerCapacity: 33659000,
      inStationCapacity: 19203000,
      passengerStrong: 0.6,
    },
    {
      id: "kunming",
      number: 20,
      city: "昆明",
      lines: 6,
      operationLength: 165.9,
      passengerCapacity: 25910000,
      inStationCapacity: 18513000,
      passengerStrong: 0.52,
    },
    {
      id: "changchun",
      number: 21,
      city: "长春",
      lines: 6,
      operationLength: 140.8,
      passengerCapacity: 23788000,
      inStationCapacity: 16648500,
      passengerStrong: 0.56,
    },
    {
      id: "fuzhou",
      number: 22,
      city: "福州",
      lines: 5,
      operationLength: 139,
      passengerCapacity: 27607000,
      inStationCapacity: 19532000,
      passengerStrong: 0.66,
    },
    {
      id: "nanchang",
      number: 23,
      city: "南昌",
      lines: 4,
      operationLength: 128.5,
      passengerCapacity: 36031000,
      inStationCapacity: 21537000,
      passengerStrong: 0.94,
    },
    {
      id: "nanning",
      number: 24,
      city: "南宁",
      lines: 5,
      operationLength: 128.2,
      passengerCapacity: 32168000,
      inStationCapacity: 19392000,
      passengerStrong: 0.84,
    },
    {
      id: "foshan",
      number: 25,
      city: "佛山",
      lines: 6,
      operationLength: 127.3,
      passengerCapacity: 13794000,
      inStationCapacity: 10162000,
      passengerStrong: 0.36,
    },
    {
      id: "guiyang",
      number: 26,
      city: "贵阳",
      lines: 3,
      operationLength: 116.9,
      passengerCapacity: 20734000,
      inStationCapacity: 14809000,
      passengerStrong: 0.59,
    },
    {
      id: "wuxi",
      number: 27,
      city: "无锡",
      lines: 4,
      operationLength: 110.8,
      passengerCapacity: 19651000,
      inStationCapacity: 12887000,
      passengerStrong: 0.59,
    },
    {
      id: "xiamen",
      number: 28,
      city: "厦门",
      lines: 3,
      operationLength: 98.4,
      passengerCapacity: 21096000,
      inStationCapacity: 16248000,
      passengerStrong: 0.71,
    },
    {
      id: "jinan",
      number: 29,
      city: "济南",
      lines: 3,
      operationLength: 84.1,
      passengerCapacity: 10530000,
      inStationCapacity: 7503000,
      passengerStrong: 0.42,
    },
    {
      id: "haerbin",
      number: 30,
      city: "哈尔滨",
      lines: 3,
      operationLength: 82.1,
      passengerCapacity: 29295000,
      inStationCapacity: 19201000,
      passengerStrong: 1.19,
    },
    {
      id: "shijiazhuang",
      number: 31,
      city: "石家庄",
      lines: 3,
      operationLength: 74.3,
      passengerCapacity: 16607000,
      inStationCapacity: 11515000,
      passengerStrong: 0.75,
    },
    {
      id: "xuzhou",
      number: 32,
      city: "徐州",
      lines: 3,
      operationLength: 64.1,
      passengerCapacity: 9471000,
      inStationCapacity: 6798000,
      passengerStrong: 0.49,
    },
    {
      id: "nantong",
      number: 33,
      city: "南通",
      lines: 3,
      operationLength: 61.2,
      passengerCapacity: 3902000,
      inStationCapacity: 2216000,
      passengerStrong: 0.21,
    },
    {
      id: "shaoxing",
      number: 34,
      city: "绍兴",
      lines: 2,
      operationLength: 58.8,
      passengerCapacity: 3801000,
      inStationCapacity: 3215000,
      passengerStrong: 0.22,
    },
    {
      id: "changzhou",
      number: 35,
      city: "常州",
      lines: 2,
      operationLength: 54,
      passengerCapacity: 6231000,
      inStationCapacity: 5121000,
      passengerStrong: 0.38,
    },
    {
      id: "wenzhou",
      number: 36,
      city: "温州",
      lines: 1,
      operationLength: 52.5,
      passengerCapacity: 1694000,
      inStationCapacity: 1452000,
      passengerStrong: 0.11,
    },
    {
      id: "huhehaote",
      number: 37,
      city: "呼和浩特",
      lines: 2,
      operationLength: 49,
      passengerCapacity: 6324000,
      inStationCapacity: 5145000,
      passengerStrong: 0.43,
    },
    {
      id: "wuhu",
      number: 38,
      city: "芜湖",
      lines: 2,
      operationLength: 46.2,
      passengerCapacity: 3324000,
      inStationCapacity: 2790000,
      passengerStrong: 0.24,
    },
    {
      id: "luoyang",
      number: 39,
      city: "洛阳",
      lines: 2,
      operationLength: 43.5,
      passengerCapacity: 6821000,
      inStationCapacity: 5113000,
      passengerStrong: 0.52,
    },
    {
      id: "kunshan",
      number: 40,
      city: "昆山",
      lines: 2,
      operationLength: 43,
      passengerCapacity: 4816000,
      inStationCapacity: 3727000,
      passengerStrong: 0.37,
    },
    {
      id: "dongguan",
      number: 41,
      city: "东莞",
      lines: 1,
      operationLength: 37.8,
      passengerCapacity: 3730000,
      inStationCapacity: 3730000,
      passengerStrong: 0.33,
    },
    {
      id: "lanzhou",
      number: 42,
      city: "兰州",
      lines: 2,
      operationLength: 33.5,
      passengerCapacity: 11434000,
      inStationCapacity: 9825000,
      passengerStrong: 1.14,
    },
    {
      id: "wulumuqi",
      number: 43,
      city: "乌鲁木齐",
      lines: 1,
      operationLength: 26.8,
      passengerCapacity: 3596000,
      inStationCapacity: 3596000,
      passengerStrong: 0.45,
    },
    {
      id: "huangshi",
      number: 44,
      city: "黄石",
      lines: 1,
      operationLength: 26.8,
      passengerCapacity: 449000,
      inStationCapacity: 449000,
      passengerStrong: 0.06,
    },
    {
      id: "taiyuan",
      number: 45,
      city: "太原",
      lines: 1,
      operationLength: 23.3,
      passengerCapacity: 4000000,
      inStationCapacity: 4000000,
      passengerStrong: 0.57,
    },
    {
      id: "huaian",
      number: 46,
      city: "淮安",
      lines: 1,
      operationLength: 20.1,
      passengerCapacity: 697000,
      inStationCapacity: 697000,
      passengerStrong: 0.12,
    },
    {
      id: "jurong",
      number: 47,
      city: "句容",
      lines: 1,
      operationLength: 17.3,
      passengerCapacity: 645000,
      inStationCapacity: 373000,
      passengerStrong: 0.12,
    },
    {
      id: "jiaxing",
      number: 48,
      city: "嘉兴",
      lines: 1,
      operationLength: 13.8,
      passengerCapacity: 301000,
      inStationCapacity: 301000,
      passengerStrong: 0.07,
    },
    {
      id: "wenshan",
      number: 49,
      city: "文山",
      lines: 1,
      operationLength: 13.4,
      passengerCapacity: 39000,
      inStationCapacity: 38000,
      passengerStrong: 0.01,
    },
    {
      id: "honghe",
      number: 50,
      city: "红河",
      lines: 1,
      operationLength: 13.4,
      passengerCapacity: 18000,
      inStationCapacity: 18000,
      passengerStrong: 0.01,
    },
    {
      id: "tianshui",
      number: 51,
      city: "天水",
      lines: 1,
      operationLength: 12.9,
      passengerCapacity: 100000,
      inStationCapacity: 100000,
      passengerStrong: 0.03,
    },
    {
      id: "xianyang",
      number: 52,
      city: "咸阳",
      lines: 1,
      operationLength: 10.7,
      passengerCapacity: 2009000,
      inStationCapacity: 1481000,
      passengerStrong: 0.63,
    },
    {
      id: "sanya",
      number: 53,
      city: "三亚",
      lines: 1,
      operationLength: 8.4,
      passengerCapacity: 119000,
      inStationCapacity: 119000,
      passengerStrong: 0.05,
    },
  ],
  summaries: [
    "注1：本表按城市运营里程由大到小排序。运营线路条数中上海地铁11号线（昆山段）、广佛线和广州地铁7号线（佛山段）、宁句线（句容段）、苏州地铁11号线（昆山段）、西安地铁1号线（咸阳段）不重复计算。",
    "注2：本表含上海、北京、广州、成都、武汉、深圳、南京、青岛、苏州、沈阳、佛山、黄石、淮安、嘉兴、文山、红河、天水、三亚等城市有轨电车线路，不含大连201和202路、长春54和55路等与社会车辆完全混行的传统电车。",
    "注3：海宁杭海线未列入本表。",
    "数据来源：交通运输部",
  ],
};

describe('vm', () => {
  describe('prevRangeId', () => {
    it('should return previous year when step is year', () => {
      const id = '2024-2';
      const step = 'year';
      const result = prevRangeId(id, step);
      expect(result).toBe('2023-2');
    });

    it('should return previous month when step is month', () => {
      const id = '2024-2';
      const step = 'month';
      const result = prevRangeId(id, step);
      expect(result).toBe('2024-1');
    });

    it('should return December of previous year when step is month and month is January', () => {
      const id = '2024-1';
      const step = 'month';
      const result = prevRangeId(id, step);
      expect(result).toBe('2023-12');
    });

    it('should throw error when id is not valid', () => {
      const id = 'invalidid';
      const step = 'month';
      expect(() => prevRangeId(id, step)).toThrowError(`range not valid, need id like '2024-2', got ${id}`);
    });
  });

  describe('toVM', () => {
    it('should return correct DashboardDataVM only current', () => {
      const current: DashboardData = { ...testDashboardData };

      const vm = toVM({ current });
      expect(vm.calculatedFields).toBeInstanceOf(Array);
    });

    it('should calculate passengerStrong', () => {
      const { passengerStrong, ...current } = testDashboardData;

      const vm = toVM({ current });
      expect(vm.passengerStrongVM).toEqual({
        value: 0.895,
      } as any);
      expect(vm.calculatedFields).toContain('passengerStrongVM.value');
    });

    it('should calculate inStationCapacityVM', () => {
      const current = testDashboardData;
      const lastMonth = {
        inStationCapacity: 15e8,
      } as unknown as DashboardData;
      const lastYear = {
        inStationCapacity: 13.75e8,
      } as unknown as DashboardData;

      const vm = toVM({ current, lastMonth, lastYear });
      expect(vm.inStationCapacityVM).toEqual({
        value: 16.5e8,
        compareLastMonth: 1.5e8,
        compareLastMonthPercent: 0.1,
        compareLastYear: 2.75e8,
        compareLastYearPercent: 0.2,
      });
      expect(vm.calculatedFields).toContain('inStationCapacityVM.compareLastMonth');
      expect(vm.calculatedFields).toContain('inStationCapacityVM.compareLastMonthPercent');
      expect(vm.calculatedFields).toContain('inStationCapacityVM.compareLastYear');
      expect(vm.calculatedFields).toContain('inStationCapacityVM.compareLastYearPercent');
    });

    it('should calculate passengerStrongVM with passengerStrong', () => {
      const current = testDashboardData;
      const lastMonth = {
        passengerStrong: {
          value: 0.885,
        },
      } as unknown as DashboardData;
      const lastYear = {
        passengerStrong: {
          value: 0.526,
        },
      } as unknown as DashboardData;

      const vm = toVM({ current, lastMonth, lastYear });
      expect(vm.passengerStrongVM).toEqual({
        value: 0.896,
        compareLastMonth: 0.011,
        compareLastMonthPercent: 0.013,
        compareLastYear: 0.37,
        compareLastYearPercent: 0.024,
      });
      expect(vm.calculatedFields).toContain('passengerStrongVM.compareLastMonth');
      expect(vm.calculatedFields).not.toContain('passengerStrongVM.compareLastMonthPercent');
      expect(vm.calculatedFields).toContain('passengerStrongVM.compareLastYear');
      expect(vm.calculatedFields).not.toContain('passengerStrongVM.compareLastYearPercent');
    });

    it('should calculate passengerStrongVM without passengerStrong', () => {
      const current = { ...testDashboardData };
      current.passengerStrong = { value: 0.896 };
      const lastMonth = {
        passengerStrong: {
          value: 0.885,
        },
      } as unknown as DashboardData;
      const lastYear = {
        passengerStrong: {
          value: 0.552,
        },
      } as unknown as DashboardData;

      const vm = toVM({ current, lastMonth, lastYear });
      expect(vm.passengerStrongVM.value).toBe(0.896);

      expect(vm.passengerStrongVM.compareLastMonth).toBe(0.011);
      expect(vm.calculatedFields).toContain('passengerStrongVM.compareLastMonth');

      expect(Math.ceil(vm.passengerStrongVM.compareLastMonthPercent! * 1000)).toBe(13);
      expect(vm.calculatedFields).toContain('passengerStrongVM.compareLastMonthPercent');

      expect(vm.passengerStrongVM.compareLastYear).toBe(0.344);
      expect(vm.calculatedFields).toContain('passengerStrongVM.compareLastYear');

      expect(Math.ceil(vm.passengerStrongVM.compareLastYearPercent! * 1000)).toBe(624);
      expect(vm.calculatedFields).toContain('passengerStrongVM.compareLastYearPercent');
    });

    it('should diff volume', () => {
      const current = testDashboardData;
      const lastMonth = {
        largeVolume: {
          lines: 269,
          operationLength: 9542.2,
          passengerCapacity: 2750000000,
          inStationCapacity: 1640000000,
        },
      } as unknown as DashboardData;

      const vm = toVM({ current, lastMonth });
      expect(vm.largeVolumeCompare).toBeTruthy();
      expect(vm.largeVolumeCompare.lines.compareLastMonth).toBe(1);
      expect(vm.largeVolumeCompare.operationLength.compareLastMonth).toBe(34.2);
      expect(vm.largeVolumeCompare.passengerCapacity.compareLastMonth).toBe(-0.4e8);
      expect(vm.largeVolumeCompare.inStationCapacity.compareLastMonth).toBe(-0.3e8);
    });
  });
});
