import React, { FunctionComponent, useState, useEffect } from "react";
import { CoinDetailInfo, OPTDAYS, ChartInfo } from "../../interfaces/interfaces";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory, useParams } from "react-router-dom";
import { getSingleItem, getHistoricalByTime } from "../../services/apis/Items";
import Loader from "../../components/Loader";
import Chart from "../../components/Chart";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffffff",
    minWidth: "100wh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    boxSizing: "border-box",
  },
  container: {
    width: "350px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    border: "1px solid #B7CBCB",
    borderRadius: "10px",
  },
  imageIcon: {
    width: "50px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: 400,
  },
  itemPrice: {
    fontSize: "32px",
    fontWeight: 500,
    margin: 0,
  },
  percentage: {
    fontSize: "18px",
    margin: 0,
    marginTop: "-5px",
    color: "#62BEB7",
  },
  info: {
    fontSize: "16px",
    margin: 0,
  },
  valueData: {
    marginBottom: "10px",
  },
  infoItem: {
    margin: "0 0 5px 0",
    color: "#959c9b",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#B7CBCB",
    width: "350px",
  },
  backIcon: {
    cursor: "pointer",
  },
  menuItem: {
    textAlign: "center",
  },
});

interface Coin {
  coin: string;
}

const Detail: FunctionComponent = () => {
  const { coin }: Coin = useParams();

  const {
    root,
    menu,
    menuItem,
    backIcon,
    container,
    imageIcon,
    infoItem,
    valueData,
    header,
    title,
    itemPrice,
    percentage,
    info,
  } = useStyles();

  let history = useHistory();

  const [coinData, setCoinData] = useState<CoinDetailInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chartInfo, setChartInfo] = useState<ChartInfo[]>([]);
  const [numberOfDays, setNumberOfDays] = useState<OPTDAYS>(OPTDAYS.WEEK);

  useEffect(() => {
    const getCoinInfo = async (coin: string) => {
      const resp: CoinDetailInfo = await getSingleItem(coin);
      const data : ChartInfo[] = await getHistoricalByTime(coin,numberOfDays);
      setCoinData(resp);
      setChartInfo(data);
      setIsLoading(false);
    };
    getCoinInfo(coin);
  }, [coin]);

  const toggleNumberOfDays = async() => {
    //obtener el nuevo valor
    const data : ChartInfo[] = await getHistoricalByTime(coin,numberOfDays);
    setChartInfo(data);
    setNumberOfDays(() =>
      numberOfDays === OPTDAYS.WEEK ? OPTDAYS.MONTH : OPTDAYS.WEEK
    );
  };
  return (
    <div className={root}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className={menu}>
            <ArrowBackIosIcon
              className={backIcon}
              onClick={() => history.push(`/zengo-challenge/`)}
            />
            <h3 className={menuItem}>Information</h3>
          </section>
          <section className={container}>
            <section className={header}>
              <img
                alt={`Coin icon from ${coinData?.name}`}
                className={imageIcon}
                src={coinData?.image}
                title={coinData?.name}
              />
              <h2 className={title}>{coinData?.name}/USD</h2>
            </section>
            <section className={valueData}>
              <p className={itemPrice}>${coinData?.price}</p>
              <p className={percentage}>
                {coinData != undefined && coinData?.changePct24hour >= 0 && `+`}
                {coinData?.changePct24hour}% Today
              </p>
            </section>
            <section className={info}>
              <p className={infoItem}>
                Creation date: {coinData?.creationDate}
              </p>
              <p className={infoItem}>
                Active blocks: {coinData?.blocksNumber}
              </p>
              <p className={infoItem}>
                Value from {numberOfDays} past days:
              <Tooltip
                title={`Switch to past ${
                  numberOfDays === OPTDAYS.WEEK ? OPTDAYS.MONTH : OPTDAYS.WEEK
                } days`}
              >
                <Switch
                  defaultChecked
                  color="default"
                  value={numberOfDays}
                  onChange={toggleNumberOfDays}
                />
              </Tooltip>
              </p>
              <Chart chartInfo={chartInfo} />
            </section>
          </section>
        </>
      )}
    </div>
  );
};

/* 
● A toggle that shows by default the value from the past 7 days
and can switch to the past 30 days. */

export default Detail;
