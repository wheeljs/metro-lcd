import type { Environment } from './types';

export const environment: Environment = {
  VoicesPrefix: {
    ch: 'assets/voices/ch/',
    en: 'assets/voices/en/',
  },
  firestore: {
    collectionName: 'rail-transit-statistics',
  },
};
