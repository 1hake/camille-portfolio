import React, { useContext } from "react";
import { MyContext } from "../../stores/Context";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

const classes = {
  container: {
    height: "15vh",
    width: "100%",
    position: "fixed",
    top: "0",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mobileContainer: {
    height: "10vh",
    width: "100%",
    position: "fixed",
    top: "0",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export const Header = (props) => {
  const { isMobile } = useContext(MyContext)
  return (
    <div style={isMobile ? classes.mobileContainer : classes.container}>
      <Logo></Logo>
      <Menu></Menu>
    </div>
  );
};
