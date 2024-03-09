import { StationStatus, type Line } from '../types';

const LineVoicePrefix = '02/';
const ArrivedCommonVoices = [`${LineVoicePrefix}Common-0201.wav`];

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
          ch: [`${LineVoicePrefix}01-WangFuZhuang-T.wav`, `${LineVoicePrefix}01-WangFuZhuang-01.wav`, `${LineVoicePrefix}01-WangFuZhuang-0101.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}01-WangFuZhuang-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}02-LaShanNan-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}02-LaShanNan-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}03-LaShan-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}03-LaShan-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}04-ErHuanXiLu-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}04-ErHuanXiLu-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}05-LaoTun-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}05-LaoTun-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}06-BaLiQiao-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}06-BaLiQiao-02.wav`, ...ArrivedCommonVoices],
          en: [],
        },
      },
    },
    {
      id: '0207',
      nameCh: '益康路',
      nameEn: 'Yi Kang Lu',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}07-YiKangLu-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}07-YiKangLu-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}08-JinanRailwayStationNorth-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}08-JinanRailwayStationNorth-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}09-JiLuoLu-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}09-JiLuoLu-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}10-ShengChanLu-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}10-ShengChanLu-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}11-BeiYuan-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}11-BeiYuan-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}12-LiShanLu-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}12-LiShanLu-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}13-QiLiPu-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}13-QiLiPu-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}14-ZhuDian-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}14-ZhuDian-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}15-BaJianPu-01.wav`, `${LineVoicePrefix}15-BaJianPu-0101.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}15-BaJianPu-02.wav`, ...ArrivedCommonVoices],
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
      nameEn: 'Jiang Jia Zhuang',
      voices: {
        [StationStatus.ArrivingSoon]: {
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}16-JiangJiaZhuang-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}16-JiangJiaZhuang-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}17-FengHuangLu-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}17-FengHuangLu-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}18-BaoShan-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}18-BaoShan-02.wav`, ...ArrivedCommonVoices],
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
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-T.wav`, `${LineVoicePrefix}19-PengJiaZhuang-01.wav`],
          en: [],
        },
        [StationStatus.Arrived]: {
          ch: [`${LineVoicePrefix}19-PengJiaZhuang-02.wav`, ...ArrivedCommonVoices],
          en: [],
        },
      },
    },
  ],
};

export default Line2;
