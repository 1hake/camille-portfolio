import React, { useContext } from "react";
import { MyContext } from "../../stores/Context";

export const SinglePage = () => {
  const {
    dispatch,
    state: { panelOpen, currentPanel },
  } = useContext(MyContext);

  return (
    <div style={panelOpen ? classes.panel : classes.panelClose}>
      {currentPanel && (
        <>
          <div
            style={{
              ...classes.image,
              backgroundImage: `url(${currentPanel.src})`,
            }}
          ></div>
          <div style={classes.textContainer}>
            <p style={classes.text}>{currentPanel.text}</p>
            <div
              onClick={() => dispatch({ type: "SET_PANEL", data: null })}
              style={classes.back}
            >
              <img
                style={classes.arrow}
                src={require("../../assets/img/left-arrow.png")}
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const classes = {
  panel: {
    position: "fixed" /* Stay in place */,
    zIndex: 1 /* Sit on top */,
    left: 0,
    top: 0,
    width: "100%" /* Full width */,
    height: "100%",
    backgroundColor: "white",
    transition: "0.4s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.95,
    // backdropFilter: "blur(10px)",
  },
  panelClose: {
    position: "fixed" /* Stay in place */,
    zIndex: 1 /* Sit on top */,
    left: 0,
    top: 0,
    width: "100%" /* Full width */,
    height: "0%",
    transition: "0.4s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    margin: "40px",
    height: "60vh",
    width: "20vw",
    transition: "0.5s ease-in-out",

    // boxShadow: "0px 0px 22px 5px rgba(0,0,0,0.3)",
  },
  text: {
    fontSize: "1rem",
    maxWidth: "500px",
    margin: "20px",
    color: "black",
  },
  back: {
    fontSize: "1rem",

    margin: "20px",
    color: "black",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  arrow: {
    height: "30px",
  },
};
