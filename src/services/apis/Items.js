import axios from "axios";

const getHeader = () =>{
  const apiKey = process.env.REACT_APP_APIKey;
  return {authorization: apiKey};
}

export default async function getItems (coinsOptions) {
  const options = coinsOptions.join();
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${options}&tsyms=USD`;
  try {
    const { data } = await axios({
      url,
      method: "GET",
      headers: getHeader(),
    });
    return data;
  } catch (err) {
    throw err;
  }
}


async function getSingleItem (coin) {
  const url = `https://min-api.cryptocompare.com/data/blockchain/mining/calculator?fsyms=${coin}&tsyms=USD`
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


async function getHistoricalByTime (coin, numberOfDays) {
  const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin}&tsym=USD&limit=${numberOfDays}&tryConversion=false&aggregate=1`
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

export {
  getSingleItem
}
