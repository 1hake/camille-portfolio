import React, { useContext, useState } from "react";
import { MyContext } from "../../stores/Context";



export const ImageContainer = ({ image, length }) => {
  const {
    dispatch,
    state: { panelOpen },
  } = useContext(MyContext);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={classes.wrapper}>
        <div
          alt={image}
          onClick={() => dispatch({ type: "SET_PANEL", data: image })}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          style={{
            ...(!open ? classes.image : classes.selectedImage),
            backgroundImage: `url(${image.src})`,
            width: `${80 / length}vw`,
            height: "60vh",
          }}
          src={image}
        >
          <div style={open ? classes.panelOpen : classes.panelClose}>
            <h1 style={{
              ...open ? classes.text : classes.noText,
              fontSize: length > 3 ? "2em" : "4em"
            }}>{image.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const classes = {
  image: {
    transition: "all 0.3s ease-in-out",
    backgroundSize: "cover",
  },
  selectedImage: {
    height: "60vh",
    transform: "scale(1.2,1.2)",
    transition: "all 0.3s ease-in-out",
    backgroundSize: "cover",
  },
  wrapper: {
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    margin: "1px",
  },
  text: {
    position: "relative",
    fontWeight: "bold",
    overflowWrap: "break-word",
    maxWidth: "15vw",
    opacity: 1,
  },
  panelOpen: {
    transition: "all 0.8s ease-in-out",
    height: "60vh",
    width: "27vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    backgroundColor: "black",
    position: "absolute",
  },
  panelClose: {
    transition: "all 0.8s ease-in-out",
    height: "60vh",
    width: "27vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    backgroundColor: "black",
    position: "absolute",
  },

  noText: {
    position: "relative",
    fontWeight: "bold",
    overflowWrap: "break-word",
    maxWidth: "15vw",
    opacity: 0,
  },
};
