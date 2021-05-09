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
    height: "60vh",
    width: "20vw",
    transition: "0.5s ease-in-out",
    // boxShadow: "0px 0px 22px 5px rgba(0,0,0,0.3)",
  },
  selectedImage: {
    margin: "20px",
    height: "70vh",
    width: "20vw",
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

const ImageContainer = ({ image }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      alt={image}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{
        ...(!open ? classes.image : classes.selectedImage),
        backgroundImage: `url(${image})`,
      }}
      src={image}
    ></div>
  );
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
