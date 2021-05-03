import React, { useContext } from "react";
import { MyContext } from "../stores/Context";
import { Panel } from "./Panel";
import { menus } from "../data/content";

export const ScrollableLayout = () => {
  return (
    <>
      {menus.map((element) => {
        return <Panel color={element.color} name={element.name} />;
      })}
    </>
  );
};
