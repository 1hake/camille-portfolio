import React, {
  useRef,
  useEffect,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import { MyContext } from "../../stores/Context";
import { menus } from "../../data/content";
import { ImageContainer } from "./ImageContainer";

const classes = {
  panel: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

export const Panel = ({ name, color, children, index }) => {
  const { dispatch } = useContext(MyContext);
  const myRef = useRef(null);

  const data = menus.filter((element) => {
    return element.name === name;
  });

  useEffect(() => {
    console.log("stored ref");
    dispatch({ type: "STORE_REF", ref: myRef, name: name });
  }, [dispatch, name]);

  return (
    <div ref={myRef} style={{ ...classes.panel, backgroundColor: color }}>
      <div style={classes.imagesContainer}>
        {data[0].images.map((image) => {
          return <ImageContainer image={image}></ImageContainer>;
        })}
      </div>
    </div>
  );
};
