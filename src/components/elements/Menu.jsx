import React, { useContext, useEffect } from "react";
import { MyContext } from "../../stores/Context";
import { menus } from "../../data/content";
import { AnimatedMenuItem } from "../containers/AnimatedMenuItem";
import { scrollToRef } from "../utils/tools";

import { IParallax } from "@react-spring/parallax";

const classes = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  menuItem: {
    padding: "20px",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "black",
    zIndex: "1",
    fontFamily: "Source Sans Pro",
  },
  selected: {
    padding: "20px",
    color: "black",
    fontSize: "1.5em",
    fontWeight: "bold",
    fontFamily: "Source Sans Pro",

    // textDecoration: "underline #E8C500",
    // textDecorationThickness: "10px",
  },
};

const MenuItem = ({ name, isActive }) => {
  const {
    state: { refs, currentPage },
    dispatch,
  } = useContext(MyContext);
  return (
    <AnimatedMenuItem name={name}>
      <div
        onClick={() => {
          dispatch({ type: "SET_CURRENT_PAGE", data: name });
          scrollToRef(refs[name]);
        }}
        style={currentPage === name ? classes.selected : classes.menuItem}
      >
        {name}
      </div>
    </AnimatedMenuItem>
  );
};

export const Menu = () => {
  const {
    state: { refs, currentPage },
  } = useContext(MyContext);

  return (
    <div style={classes.container}>
      {menus.map((item, index) => {
        return <MenuItem name={item.name} index={index} />;
      })}
    </div>
  );
};
