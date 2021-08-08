export interface CoinsInfo {
  name: string; 
  image: string; 
  price: number;
  changePct24hour: number;
  pinned: boolean;
}

export interface CoinDetailInfo {
  name: string;
  fullName: string; 
  image: string; 
  price: number; 
  changePct24hour: number; //ver por que no esta en la otra
  creationDate: Date; 
  blocksNumber: number;
}
export enum STATUS {
  LOADING = "loading",
  COMPLETE = "complete",
  ERROR = "error"
}

export enum ORDER {
  PRICE = "price",
  NAME = "name"
}

export enum OPTDAYS {
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