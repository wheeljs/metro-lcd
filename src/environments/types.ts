export interface Environment {
  VoicesPrefix: {
    [locale: string]: string;
  };
  disableSentry?: boolean;
}
