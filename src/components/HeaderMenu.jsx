import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

const classes = {
  container: {
    height: "10vh",
    width: "100%",
    backgroundColor: "white",
    position: "sticky",
    top: "0",
    zIndex: 1,
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
