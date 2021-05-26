import React, { useContext } from "react";
import { MyContext } from "../../stores/Context";

export const SinglePage = () => {
  const { state } = useContext(MyContext);
  return <div style={classes.container}></div>;
};

const classes = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
