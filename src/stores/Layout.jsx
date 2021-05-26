import React from "react";
import "../App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "../stores/Context";

const classes = {
  body: {
    backgroundColor: "#E8C500",
  },
};

export const Layout = ({ children }) => {
  return (
    <MainContext>
      <div>
        <div style={classes.body}>{children}</div>
      </div>
      <ToastContainer />
    </MainContext>
  );
};
