import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import { CoinsInfo } from "../../interfaces/interfaces";
import { BrowserRouterProps, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "5px",
    padding: "0px 10px",
    minWidth: "350px",
    backgroundColor: "#ffffff",
    color: "#222626",
    borderBottom: '1px solid #B7CBCB',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageIcon: {
    width: "40px",
  },
  currency: {
    color: "#62BEB7",
    fontSize: "1.5rem",
    fontWeight: 500,
  },
  icon: {
    color: "#B7CBCB",
    cursor: "pointer",
    marginLeft: "5px",
    width: "32px",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
  },
  info: {
    width: "60%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  up: {
    color: "#61ff61",
  },
  down: {
    color: "#ff6161",
  },
  clickable:{
    cursor: 'pointer',
  }
});

interface ItemInfo {
  coinInfo: CoinsInfo;
  setCoinsList: Function;
  coinsList: Array<CoinsInfo>;
  index: number;
}

const Item: FunctionComponent<ItemInfo> = ({
  coinInfo,
  setCoinsList,
  coinsList,
  index,
}: ItemInfo) => {
  const { root, imageIcon, currency, clickable, icon, title, info, up, down } =
    useStyles();
  const { name, image, price, pinned, changePct24hour } = coinInfo;
  let history = useHistory();

  const goToDetail = () => {
    history.push(`/detail/${name}`);
  };

  const togglePinned = () => {
    const newCoinsList: Array<CoinsInfo> = [...coinsList];
    const itemToUpdate = newCoinsList[index];

    if (itemToUpdate !== undefined) {
      itemToUpdate.pinned = !itemToUpdate.pinned;
      newCoinsList[index] = itemToUpdate;
      setCoinsList(newCoinsList);
    }
  };

  return (
    <div className={root}>
        <section className={`${title} ${clickable}`} onClick={goToDetail}>
          <img className={imageIcon} src={image} title={name} />
          <h2>{name}</h2>
        </section>
        <section className={info}>
          <section className={clickable} onClick={goToDetail}>
            <span>
              {(changePct24hour !== undefined && changePct24hour > 0) ? (
                <TrendingUpIcon className={up} />
              ) : (
                <TrendingDownIcon className={down} />
              )}
            </span>
            <span className={currency}>${price}</span>
          </section>
          {pinned ? (
            <Tooltip title={`Unpin from the top`}>
              <BookmarkIcon className={icon} onClick={() => togglePinned()} />
            </Tooltip>
          ) : (
            <Tooltip title={`Pin to the top`}>
              <BookmarkBorderIcon
                className={icon}
                onClick={() => togglePinned()}
              />
            </Tooltip>
          )}
        </section>
    </div>
  );
};

export default Item;
