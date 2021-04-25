import React from "react";

const classes = {
  logo: {
    height: "8vh",
    marginLeft: "10px",
  },
};

export const Logo = () => {
  return (
    <img style={classes.logo} src={require("../assets/img/logo.png")} alt="" />
  );
};
