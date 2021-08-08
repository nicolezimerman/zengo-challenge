export interface CoinsInfo {
  name: string;
  image: string;
  value: number;
  changePct24hour: number,
  pinned: boolean;
  creationDate?: Date;
  blocksNumber?: number;
}

export enum ORDER{
  VALUE = "value",
  NAME = "name"
}

export enum OPTDAYS{
  WEEK = 7,
  MONTH = 30,
}
export enum COINS{
  BTC = "BTC",
  ETC = "ETC",
  ETH = "ETH",
  XRP = "XRP",
  ADA = "ADA",
  LTC = "LTC",
  TFUEL = "TFUEL",
}