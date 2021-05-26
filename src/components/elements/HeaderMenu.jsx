import React from "react";
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
};

export const Header = (props) => {
  return (
    <div style={classes.container}>
      <Logo></Logo>
      <Menu></Menu>
    </div>
  );
};
