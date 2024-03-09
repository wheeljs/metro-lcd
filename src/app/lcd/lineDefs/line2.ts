import { StationStatus, type Line } from '../types';

export const Line2: Line = {
  id: '02',
  nameCh: { main: '2', suffix: '号线' },
  nameEn: { prefix: 'Line ', main: '2' },
  color: '#FEDD00',
  direction: 'up',
  stations: [
    {
      id: '0201',
      nameCh: '王府庄',
      nameEn: 'Wang Fu Zhuang',
      transfers: [
        {
          id: '01',
          nameCh: { main: '1', suffix: '号线' },
          nameEn: { prefix: 'Line ', main: '1' },
          color: '#A55FC8',
        },
      ],
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['01-WangFuZhuang-T.wav', '01-WangFuZhuang-01.wav', '01-WangFuZhuang-0101.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['01-WangFuZhuang-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0202',
      nameCh: '腊山南',
      nameEn: 'La Shan Nan',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '02-LaShanNan-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['02-LaShanNan-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0203',
      nameCh: '腊山',
      nameEn: 'La Shan',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '03-LaShan-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['03-LaShan-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0204',
      nameCh: '二环西路',
      nameEn: 'Er Huan Xi Lu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '04-ErHuanXiLu-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['04-ErHuanXiLu-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0205',
      nameCh: '老屯',
      nameEn: 'Lao Tun',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '05-LaoTun-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['05-LaoTun-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0206',
      nameCh: '八里桥',
      nameEn: 'Ba Li Qiao',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '06-BaLiQiao-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['06-BaLiQiao-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0207',
      nameCh: '益康路',
      nameEn: 'YiKangLu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '07-YiKangLu-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['07-YiKangLu-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0208',
      nameCh: '济南站北',
      nameEn: 'Jinan Railway<br/>Station North',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '08-JinanRailwayStationNorth-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['08-JinanRailwayStationNorth-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0209',
      nameCh: '济泺路',
      nameEn: 'Ji Luo Lu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '09-JiLuoLu-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['09-JiLuoLu-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0210',
      nameCh: '生产路',
      nameEn: 'Sheng Chan Lu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '10-ShengChanLu-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['10-ShengChanLu-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0211',
      nameCh: '北园',
      nameEn: 'Bei Yuan',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '11-BeiYuan-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['11-BeiYuan-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0212',
      nameCh: '历山路',
      nameEn: 'Li Shan Lu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '12-LiShanLu-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['12-LiShanLu-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0213',
      nameCh: '七里堡',
      nameEn: 'Qi Li Pu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '13-QiLiPu-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['13-QiLiPu-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0214',
      nameCh: '祝甸',
      nameEn: 'Zhu Dian',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '14-ZhuDian-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['14-ZhuDian-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0215',
      nameCh: '八涧堡',
      nameEn: 'Ba Jian Pu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '15-BaJianPu-01.wav', '15-BaJianPu-0101.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['15-BaJianPu-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
      transfers: [
        {
          id: '03',
          nameCh: { main: '3', suffix: '号线' },
          nameEn: { prefix: 'Line ', main: '3' },
          color: '#004B87',
        },
      ],
    },
    {
      id: '0216',
      nameCh: '姜家庄',
      nameEn: 'JiangJiaZhuang',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '16-JiangJiaZhuang-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['16-JiangJiaZhuang-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0217',
      nameCh: '凤凰路',
      nameEn: 'Feng Huang Lu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '17-FengHuangLu-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['17-FengHuangLu-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
      transfers: [
        {
          id: '06',
          nameCh: { main: '6', suffix: '号线' },
          nameEn: { prefix: 'Line ', main: '6' },
          color: '#E51400',
          disabled: true,
        },
      ],
    },
    {
      id: '0218',
      nameCh: '鲍山',
      nameEn: 'Bao Shan',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '18-BaoShan-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['18-BaoShan-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
    {
      id: '0219',
      nameCh: '彭家庄',
      nameEn: 'Peng Jia Zhuang',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: ['19-PengJiaZhuang-T.wav', '19-PengJiaZhuang-01.wav'],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: ['19-PengJiaZhuang-02.wav', 'Common-0201.wav'],
          en: [],
        },
      },
    },
  ],
};

export default Line2;
