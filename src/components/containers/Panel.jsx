import React, {
  useRef,
  useEffect,
  useContext,
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
    marginTop: "40px",
  },
  mobileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: "15vh",
  },
};

export const Panel = ({ name, color, children, index }) => {
  const { dispatch, isMobile } = useContext(MyContext);
  const myRef = useRef(null);

  const data = menus.filter((element) => {
    return element.name === name;
  });

  useEffect(() => {
    dispatch({ type: "STORE_REF", ref: myRef, name: name });
  }, [dispatch, name]);

  return (
    <div ref={myRef} style={{ ...classes.panel, backgroundColor: color }}>
      <div style={isMobile ? classes.mobileContainer : classes.imagesContainer}>
        {data[0].images.map((image) => {
          return <ImageContainer length={data[0].images.length} image={image}></ImageContainer>;
        })}
      </div>
    </div>
  );
};
