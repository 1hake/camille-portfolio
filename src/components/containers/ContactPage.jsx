import React, { useRef, useEffect, useContext, useState } from "react";
import { MyContext } from "../../stores/Context";
import { menus } from "../../data/content";

const classes = {
  panel: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  image: {
    margin: "20px",
    height: "20vh",
    width: "20vh",
    transition: "0.5s ease-in-out",
    // boxShadow: "0px 0px 22px 5px rgba(0,0,0,0.3)",
  },
  selectedImage: {
    margin: "20px",
    height: "20vh",
    width: "20vh",
    transition: "0.5s ease-in-out",
    // boxShadow: "0px 0px 22px 5px rgba(0,0,0,0.3)",
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

export const Contact = ({ name, color, children, index }) => {
  const { dispatch } = useContext(MyContext);
  const myRef = useRef(null);

  useEffect(() => {
    dispatch({ type: "STORE_REF", ref: myRef, name: "contact" });
  }, [dispatch, name]);

  return (
    <div ref={myRef} style={{ ...classes.panel, backgroundColor: color }}>
      hello
    </div>
  );
};
