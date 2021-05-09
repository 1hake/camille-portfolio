import React, { useState, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { MyContext } from "../../stores/Context";

const classes = {
  underline: {
    position: "relative",
    height: "10px",
  },
};

export const AnimatedMenuItem = ({ children, name }) => {
  const {
    state: { currentPage },
  } = useContext(MyContext);

  const styles = useSpring({
    to: {
      opacity: currentPage === name ? "1" : "0",
      width: currentPage === name ? "100%" : "0%",
      backgroundColor: currentPage === name ? "#E8C500" : "#E8C500",
      position: "relative",
      height: "20px",
      marginTop: "-37px",
      zIndex: "-1",
    },
    config: { duration: 400 },
  });

  return (
    <div>
      {children}
      <animated.div style={styles}></animated.div>
    </div>
  );
};
