import React, { useRef, useEffect, useContext, useState } from "react";
import { MyContext } from "../../stores/Context";
import { menus } from "../../data/content";
import LogoSVG from "../utils/logoSVG";

const classes = {
  panel: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: 'column'
  },
  textContainer: {
    display: "flex",
    fontFamily: "Source Sans Pro",
    color: 'black',
    fontWeight: "bold",
    fontSize: '1.5rem'

  },
  logo: {
    margin: '30px'

  }
};

export const Contact = ({ name, color, children, index }) => {
  const { dispatch } = useContext(MyContext);
  const myRef = useRef(null);

  useEffect(() => {
    dispatch({ type: "STORE_REF", ref: myRef, name: "Contact" });
  }, [dispatch, name]);

  return (
    <div ref={myRef} style={{ ...classes.panel, backgroundColor: color }}>
      <LogoSVG style={classes.logo}></LogoSVG>
      <div style={classes.textContainer}>
        Camille Guillotin . Architecte d'intérieur . Designer Global
      </div>
      <div>
        <img src={require('../../assets/img/CV.png')} style={{ width: '30px', margin: '10px' }} alt="" />
        <img src={require('../../assets/img/Mail.png')} style={{ width: '30px', margin: '10px' }} alt="" />
        <img src={require('../../assets/img/Linkedin.png')} style={{ width: '30px', margin: '10px' }} alt="" />
      </div>
    </div>
  );
};
