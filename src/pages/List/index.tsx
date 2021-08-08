import React, { useEffect, useState, FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Item from "../../components/Item";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
import { CoinsInfo, ORDER } from "../../interfaces/interfaces";
import Loader from "../../components/Loader";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: "#62BEB7",
  },
});

const List: FunctionComponent = () => {
  const { container, root, title } = useStyles();
  const [coinsList, setCoinsList] = useState<Array<CoinsInfo>>([]);
  const [orderBy, setOrderBy] = useState<ORDER>(ORDER.NAME);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCurrencies = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETC,ETH,XRP,ADA,TFUEL&tsyms=USD`;
      try {
        const { data } = await axios({
          url,
          method: "GET",
        });

        const resp: Array<CoinsInfo> = Object.values(data.RAW)
          .map((currency: any) => currency.USD)
          .map((coin: any) => ({
            name: coin["FROMSYMBOL"],
            image: `https://www.cryptocompare.com${coin["IMAGEURL"]}`,
            value: coin["PRICE"],
            changePct24hour: coin["CHANGEPCT24HOUR"],
            pinned: false,
          }));
        setCoinsList(resp);
        setIsLoading(false);
      } catch (err) {
        throw err;
      }
    };
    getCurrencies();
  }, []);

  const toggleOrderBy = () => {
    setOrderBy(() => (orderBy === ORDER.NAME ? ORDER.VALUE : ORDER.NAME));
  };

  return (
    <div className={root}>
      <Container className={container} maxWidth={"sm"}>
        <h1 className={title}>Cryptocurrency coins</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <section>
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Value</Grid>
                <Grid item>
                  <Switch
                    value={orderBy}
                    onChange={toggleOrderBy}
                  />
                </Grid>
                <Grid item>Name</Grid>
              </Grid>
            </section>
            {coinsList != null &&
              coinsList
                .sort(function (a, b) {
                  if (a[orderBy] < b[orderBy]) return -1;
                  if (a[orderBy] > b[orderBy]) return 1;
                  return 0;
                })
                .sort(function (a, b) {
                  if (a.pinned > b.pinned) return -1;
                  if (a.pinned < b.pinned) return 1;
                  return 0;
                })
                .map((coinInfo, index) => {
                  return (
                    <Item
                      key={index}
                      index={index}
                      coinInfo={coinInfo}
                      setCoinsList={setCoinsList}
                      coinsList={coinsList}
                    />
                  );
                })}
          </>
        )}
      </Container>
    </div>
  );
};

export default List;
