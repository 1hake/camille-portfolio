import React, { useContext, useRef } from "react";

import { MyContext } from "../../stores/Context";
import { Panel } from "./Panel";
import { menus } from "../../data/content";
import { Header } from "../elements/HeaderMenu";
import { SinglePage } from "./SinglePage";
import { Contact } from "./ContactPage";

export const ScrollableLayout = ({ id }) => {
  const { panelOpen } = useContext(MyContext);
  return (
    <>
      <div style={{ backgroundColor: "white", top: "0", left: "0" }}>
        <Header></Header>

        <SinglePage></SinglePage>
        {menus.map((element, index) => {
          return (
            <Panel color={element.color} name={element.name} index={index} />
          );
        })}
        <Contact></Contact>
      </div>
    </>
  );
};
