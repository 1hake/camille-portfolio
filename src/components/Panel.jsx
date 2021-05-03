import React, {
  useRef,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { MyContext } from "../stores/Context";
import { menus } from "../data/content";

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
    maxHeight: "25vw",
    margin: "20px",
    boxShadow: "0px 0px 22px 5px rgba(0,0,0,0.3)",
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
};

export const Panel = ({ name, color, children }) => {
  const { dispatch } = useContext(MyContext);
  const myRef = useRef(null);
  const data = menus.filter((element) => {
    return element.name === name;
  });
  console.log("🚀 ~ file: Panel.jsx ~ line 27 ~ data ~ data", data);

  useEffect(() => {
    dispatch({ type: "STORE_REF", ref: myRef, name: name });
  }, [dispatch, name]);

  return (
    <div ref={myRef} style={{ ...classes.panel, backgroundColor: color }}>
      <div style={classes.imagesContainer}>
        {data[0].images.map((image) => {
          return <img alt={image} style={classes.image} src={image} />;
        })}
      </div>
    </div>
  );
};
