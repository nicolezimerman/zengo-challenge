import React, {useEffect, useState, FunctionComponent} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Item from "../../components/Item";
import Switch from "@material-ui/core/Switch";
import axios from 'axios';
import { ORDER } from "../../interfaces/interfaces";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ededed",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

const List : FunctionComponent= () =>  {
  const {container, root} = useStyles();
  const [coinsList, setCoinsList] = useState<Object | null>(null);
  const [orderBy, setOrderBy] = useState<ORDER | null>(ORDER.NAME);

  useEffect(()=>{
    const getCurrencies = async() => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETC,ETH,XRP,ADA&tsyms=USD`;
      try {
        const { data } = await axios({
          url,
          method: 'GET',
        })
        setCoinsList(data.DISPLAY);
        //return data;
      } catch (err) {
        throw err
      }
    }
    getCurrencies();
  },[])

  const toggleOrderBy = () =>{
    setOrderBy(()=> orderBy == ORDER.NAME ? ORDER.VALUE : ORDER.NAME)
  }

  return (
    <div className={root}>
      <Container className={container} maxWidth={"sm"}>
        <h1>Cryptocurrency coins</h1>
        <Switch
          defaultChecked
          color="default"
          value={orderBy}
          onChange={toggleOrderBy}
        />
        <div>Order by: {orderBy}</div>
          <Item name={"ETH"} value={3.25} image={"https://www.cryptocompare.com/media/37746238/eth.png"}/>
          <Item name={"BTC"} value={321.2} image={"https://www.cryptocompare.com/media/37746251/btc.png"}/>
          <Item name={"ETC"} value={423423.4} image={"https://www.cryptocompare.com/media/37746862/etc.png"}/>
          <Item name={"ADA"} value={43.25} image={"https://www.cryptocompare.com/media/37746235/ada.png"}/>
          <Item name={"XRP"} value={0.4325} image={"https://www.cryptocompare.com/media/38553096/xrp.png"}/>
      </Container>
    </div>
  );
}


export default List;
