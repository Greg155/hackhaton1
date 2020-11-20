import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import logo from "./assets/logoPeaky.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function NavBarTab() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "row",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary" style={{ height: "65px" }}>
        <Toolbar>
          <img
            src={logo}
            alt="logo"
            className={classes.logo}
            style={{ height: "60px", width: "70px" }}
          />
          <div style={{ flex: 7 }}></div>
          <Button color="inherit" style={{ flex: 1, margin: "0px 25px" }}>
            Who we are
          </Button>
          <Button color="inherit" style={{ flex: 1, margin: "0px 25px" }}>
            Partnership
          </Button>
          <Button color="inherit" style={{ flex: 1, margin: "0px 25px" }}>
            Contact us
          </Button>
          <Link to="/shopping">
            <IconButton
              edge="start"
              color="secondary"
              style={{ height: "100px", width: "100px" }}
            >
              <ShoppingBasketIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBarTab;