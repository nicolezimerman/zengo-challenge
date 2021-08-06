import React, {useEffect, useState, FunctionComponent} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Item from "../../components/Item";
import Switch from "@material-ui/core/Switch";
import axios from 'axios';
import { CoinsInfo, ORDER } from "../../interfaces/interfaces";
import Loader from "../../components/Loader";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title:{
    color: "rgb(197, 42, 197, 100)",
  }
});

const List : FunctionComponent= () =>  {
  const {container, root, title} = useStyles();
  const [coinsList, setCoinsList] = useState<Array<CoinsInfo> | null>(null);
  const [orderBy, setOrderBy] = useState<ORDER | null>(ORDER.NAME);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(()=>{
    const getCurrencies = async() => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETC,ETH,XRP,ADA&tsyms=USD`;
      try {
        const { data } = await axios({
          url,
          method: 'GET',
        })
        const resp: Array<CoinsInfo> = Object.values(data.RAW).map((currency:any) => currency.USD).map((coin:any) => ({
          name: coin["FROMSYMBOL"],
          image: `https://www.cryptocompare.com${coin["IMAGEURL"]}`,
          value: coin["PRICE"],
          change24hour: coin["CHANGE24HOUR"],
          pinned: false,
        }));
        setCoinsList(resp);
        setIsLoading(false)
      } catch (err) {
        throw err
      }
    }
    getCurrencies();
  },[])

  const toggleOrderBy = () =>{
    setOrderBy(()=> orderBy === ORDER.NAME ? ORDER.VALUE : ORDER.NAME)
  }

  return (
    <div className={root}>
      <Container className={container} maxWidth={"sm"}>
        <h1 className={title}>Cryptocurrency coins</h1>
        {isLoading ? <Loader /> :
        <>
        <Switch
          defaultChecked
          color="default"
          value={orderBy}
          onChange={toggleOrderBy}
        />
        <div>Order by: {orderBy}</div>
        {coinsList != null && coinsList.map(({name, value, image, pinned})=>{
          return <Item name={name} value={value} image={image} />
        })}
        </>
      }
      </Container>
    </div>
  );
}

export default List;
