import {FunctionComponent} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { CoinsInfo } from "../../interfaces/interfaces";
import {Link, BrowserRouterProps} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    margin: "5px",
    padding: "10px",
    width: "450px",
    borderRadius: "15px"
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
  currency: {
    color: "#bababa",
    fontSize: '1rem'
  },
  icon:{
    color: "#bababa",
    cursor: 'pointer',
  }
});

const Item:FunctionComponent<CoinsInfo> = ({name, image, value}: CoinsInfo) => {
  const {root, header, imageIcon, currency, icon} = useStyles();
  return (
    <Card className={root}>
      <div className={header}>
        <img
          className={imageIcon}
          src={image}
          title={name}
        />
        <Typography variant="h5">{name}</Typography>
        {value}
         <span className={currency}>USD</span>        
          <BookmarkIcon className={icon} />
          <Link to={`/detail/${name}`}>View more</Link>
      </div>
    </Card>
  );
}

export default Item;
