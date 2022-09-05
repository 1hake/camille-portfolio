import React, { useContext } from "react";
import { MyContext } from "../../stores/Context";
import { scrollToRef } from "../utils/tools";
import LogoSVG from "../utils/logoSVG";

const classes = {
  logo: {
    marginLeft: "30px",
    marginTop: "30px",
    minWidth: "50px",
  },
  mobileLogo: {
    marginLeft: "15px",
    marginTop: "15px",
    minWidth: "50px",
  },
};

export const Logo = () => {
  const {
    dispatch,
    state: { refs, currentPage },
    isMobile
  } = useContext(MyContext);
  return currentPage !== 'Contact' ? (

    <LogoSVG
      onClick={() => {
        dispatch({ type: "SET_CURRENT_PAGE", data: "Offices" });
        scrollToRef(refs["Offices"]);
      }}
      style={isMobile ? classes.mobileLogo : classes.logo}
      alt=""
    ></LogoSVG>
  ) : <div style={classes.logo}></div>;
};
