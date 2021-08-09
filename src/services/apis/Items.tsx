import axios from "axios";
import { CoinsInfo, CoinDetailInfo, ChartInfo } from "../../interfaces/interfaces";

const getHeader = () => {
  const apiKey = process.env.REACT_APP_APIKey;
  return { authorization: apiKey };
};

//OK
async function getItems(coinsOptions: Array<string>) {
  const options = coinsOptions.join();
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${options}&tsyms=USD`;
  try {
    const { data } = await axios({
      url,
      method: "GET",
      headers: getHeader(),
    });
    const resp: Array<CoinsInfo> = Object.values(data.RAW)
      .map((currency: any) => currency.USD)
      .map((coin: any) => ({
        name: coin["FROMSYMBOL"],
        image: `https://www.cryptocompare.com${coin["IMAGEURL"]}`,
        price: coin["PRICE"],
        changePct24hour: coin["CHANGEPCT24HOUR"],
        pinned: false,
      }));
    return resp;
  } catch (err) {
    throw err;
  }
}

//OKI - CHEQUEAR DATOS
async function getSingleItem(coin: string) {
  const data = await getBlockInformation(coin);
  const { CoinInfo, Price } = data[coin];
  //ver si agrego mas info (el porcentaje de 24hs)
  const resp: CoinDetailInfo = {
    name: CoinInfo["Name"],
    fullName: CoinInfo["FullName"],
    image: `https://www.cryptocompare.com${CoinInfo["ImageUrl"]}`,
    price: Price["USD"],
    creationDate: CoinInfo["AssetLaunchDate"],
    blocksNumber: CoinInfo["BlockNumber"],
    changePct24hour: 1.2,
  };
  return resp;
}

//OKI
async function getBlockInformation(coin: string) {
  const url = `https://min-api.cryptocompare.com/data/blockchain/mining/calculator?fsyms=${coin}&tsyms=USD`;
  try {
    const { data } = await axios({
      url,
      method: "GET",
      headers: getHeader(),
    });
    return data.Data;
  } catch (err) {
    throw err;
  }
}

async function getHistoricalByTime(coin: string, numberOfDays: number) {
  const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=${numberOfDays}&tryConversion=false&aggregate=1`;
  try {
    const { data } = await axios({
      url,
      method: "GET",
      headers: getHeader(),
    });
    debugger;
    const info: any = data.Data.Data;

    const resp: Array<ChartInfo> = Object.values(info)
      .map((date: any) => ({
        date: convertDate(date["time"]),
        price: date["close"],
      }));
    debugger
    return resp;
  } catch (err) {
    throw err;
  }
}

function convertDate(date : number){
  var myDate = new Date( date *1000);
  return myDate.toDateString();
}



export { getItems, getSingleItem, getHistoricalByTime };
