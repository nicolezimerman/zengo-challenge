import axios from "axios";

export default async function getItems (coinsOptions) {
  const options = coinsOptions.join();
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${options}&tsyms=USD`;
  try {
    const { data } = await axios({
      url,
      method: "GET",
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
    });
    return data.Data;
  } catch (err) {
    throw err;
  }
}

export {
  getSingleItem
}
