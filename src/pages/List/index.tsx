import React, { useEffect, useState, FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Item from "../../components/Item";
import Switch from "@material-ui/core/Switch";
import { CoinsInfo, ORDER } from "../../interfaces/interfaces";
import Loader from "../../components/Loader";
import Grid from "@material-ui/core/Grid";
import getItems from "../../services/apis/Items";

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
  const coinsOptions = ["BTC","ETC","ETH","XRP","ADA","TFUEL"];

  useEffect(() => {
    const getCurrencies = async () => {
      const data = await getItems(coinsOptions);
        const resp: Array<CoinsInfo> = Object.values(data.RAW)
          .map((currency: any) => currency.USD)
          .map((coin: any) => ({
            name: coin["FROMSYMBOL"],
            image: `https://www.cryptocompare.com${coin["IMAGEURL"]}`,
            price: coin["PRICE"],
            changePct24hour: coin["CHANGEPCT24HOUR"],
            pinned: false,
          }));
        setCoinsList(resp);
        setIsLoading(false);
    };
    getCurrencies();
  }, []);

  const toggleOrderBy = () => {
    setOrderBy(() => (orderBy === ORDER.NAME ? ORDER.PRICE : ORDER.NAME));
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
                <Grid item>Price</Grid>
                <Grid item>
                  <Switch
                    value={orderBy}
                    color='default'
                    defaultChecked
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
