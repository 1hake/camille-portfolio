import React, { useContext, useRef } from "react";

import { MyContext } from "../../stores/Context";
import { Panel } from "./Panel";
import { HomePage } from "./HomePage";
import { menus } from "../../data/content";
import { Header } from "../elements/HeaderMenu";

export const ScrollableLayout = ({ id }) => {
  const {
    state: { panelOpen },
  } = useContext(MyContext);

  return (
    <>
      <div style={{ backgroundColor: "white", top: "0", left: "0" }}>
        <Header></Header>
        <HomePage></HomePage>
        <div style={panelOpen ? classes.panel : classes.panelClose}>Colin</div>
        {menus.map((element, index) => {
          return (
            <Panel color={element.color} name={element.name} index={index} />
          );
        })}
      </div>
    </>
  );
};

const classes = {
  panel: {
    position: "fixed" /* Stay in place */,
    zIndex: 1 /* Sit on top */,
    left: 0,
    top: 0,
    width: "100%" /* Full width */,
    height: "100%",
    backgroundColor: "white",
    transition: "0.4s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  panelClose: {
    position: "fixed" /* Stay in place */,
    zIndex: 1 /* Sit on top */,
    left: 0,
    top: 0,
    width: "100%" /* Full width */,
    height: "0%",
    transition: "0.4s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
