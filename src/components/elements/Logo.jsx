import React, { useContext } from "react";
import { MyContext } from "../../stores/Context";
import { scrollToRef } from "../utils/tools";

const classes = {
  logo: {
    height: "8vh",
    marginLeft: "30px",
  },
};

export const Logo = () => {
  const {
    dispatch,
    state: { refs },
  } = useContext(MyContext);
  return (
    <img
      onClick={() => {
        dispatch({ type: "SET_CURRENT_PAGE", data: "home" });
        scrollToRef(refs["home"]);
      }}
      style={classes.logo}
      src={require("../../assets/img/logo.png")}
      alt=""
    />
  );
};
