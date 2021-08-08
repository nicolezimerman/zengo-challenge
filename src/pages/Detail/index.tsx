import React, { FunctionComponent, useState, useEffect } from "react";
import { CoinDetailInfo, OPTDAYS } from "../../interfaces/interfaces";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory, useParams } from "react-router-dom";
import { getSingleItem } from "../../services/apis/Items";
import Loader from "../../components/Loader";

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

//desestructurar coin
//const Detail: FunctionComponent<CoinsInfo> = (coin: CoinsInfo) => {
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
  const [valuePastDays, setValuePastDays] = useState<number>(3124);
  const [numberOfDays, setNumberOfDays] = useState<OPTDAYS>(OPTDAYS.WEEK);
  let history = useHistory();

  const [coinData, setCoinData] = useState<CoinDetailInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const image = "https://www.cryptocompare.com/media/37746251/btc.png";
  const name = "BTC";
  const price = 4564;
  const creationDate = 268101000;
  const changePct24hour = 1.2;
  const activeBlocks = 4558;

  useEffect(() => {
    const getCoinInfo = async (coin: string) => {
      const data = await getSingleItem(coin);
      const { CoinInfo, Price } = data[coin];
      const resp: CoinDetailInfo = {
        name: CoinInfo["Name"],
        fullName: CoinInfo["FullName"],
        image: `https://www.cryptocompare.com${CoinInfo["ImageUrl"]}`,
        price: Price["USD"],
        creationDate: CoinInfo["AssetLaunchDate"],
        blocksNumber: CoinInfo["BlockNumber"],
        changePct24hour: 1.2,
      };
      setCoinData(resp);
      setIsLoading(false);
    };
    getCoinInfo(coin);
  }, [coin]);
  const toggleNumberOfDays = () => {
    //obtener el nuevo valor
    setNumberOfDays(() =>
      numberOfDays === OPTDAYS.WEEK ? OPTDAYS.MONTH : OPTDAYS.WEEK
    );
  };

  const convertDate = () => {
    var myDate = new Date(creationDate * 1000);
    return myDate.toLocaleDateString();
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
              onClick={() => history.push(`/`)}
            />
            <h3 className={menuItem}>Information </h3>
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
                Value from {numberOfDays} past days: {valuePastDays}{" "}
              </p>
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
