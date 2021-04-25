import React, { useContext } from "react";
import { MyContext } from "../stores/Context";
import { Panel } from "./Panel";

export const ScrollableLayout = () => {
  return (
    <>
      <Panel color={"black"} name={"design"} />
      <Panel color={"red"} name={"retail"} />
      <Panel color={"green"} name={"office"} />
    </>
  );
};
