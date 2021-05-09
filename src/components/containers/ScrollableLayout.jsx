import React, { useContext, useRef } from "react";
import { Parallax, IParallax, ParallaxLayer } from "@react-spring/parallax";

import { MyContext } from "../../stores/Context";
import { Panel } from "./Panel";
import { HomePage } from "./HomePage";
import { menus } from "../../data/content";

export const ScrollableLayout = () => {
  return (
    <>
      <div style={{ backgroundColor: "white", top: "0", left: "0" }}>
        <HomePage></HomePage>
        {menus.map((element, index) => {
          return (
            <Panel color={element.color} name={element.name} index={index} />
          );
        })}
      </div>
    </>
  );
};
