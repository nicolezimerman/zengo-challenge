export interface CoinsInfo {
  name: string;
  image: string;
  value: number;
  change24hour?: number,
  pinned?: boolean;
  creationDate?: Date;
  blocksNumber?: number;
}

export enum ORDER{
  VALUE = "value",
  NAME = "name"
}

export enum COINS{
  BTC = "BTC",
  ETC = "ETC",
  ETH = "ETH",
  XRP = "XRP",
  ADA = "ADA",
  LTC = "LTC",
}