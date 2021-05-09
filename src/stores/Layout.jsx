import React from "react";
import "../App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "../stores/Context";
import { Header } from "../components/elements/HeaderMenu";

const classes = {
  body: {
    backgroundColor: "#E8C500",
  },
};

export const Layout = ({ children }) => {
  return (
    <MainContext>
      <div>
        <Header></Header>
        <div style={classes.body}>{children}</div>
      </div>
      <ToastContainer />
    </MainContext>
  );
};
