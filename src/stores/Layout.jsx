import React from "react";
import { Links } from "../components/Links";
import "../App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainContext } from "../stores/Context";
import { Header } from "../components/HeaderMenu";

export const Layout = ({ children }) => {
  return (
    <MainContext>
      <div>
        <Header></Header>
        <div>{children}</div>
      </div>
      <ToastContainer />
    </MainContext>
  );
};
