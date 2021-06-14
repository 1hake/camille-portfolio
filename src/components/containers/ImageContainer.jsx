import React, { useContext, useState } from "react";
import { MyContext } from "../../stores/Context";

export const ImageContainer = ({ image }) => {
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
          }}
          src={image}
        >
          <div style={open ? classes.panelOpen : classes.panelClose}>
            <h1 style={open ? classes.text : classes.noText}>{image.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const classes = {
  image: {
    height: "60vh",
    width: "22vw",
    transition: "all 0.3s ease-in-out",
    backgroundSize: "cover",
  },
  selectedImage: {
    height: "60vh",
    transform: "scale(1.2,1.2)",
    width: "22vw",
    transition: "all 0.3s ease-in-out",
    backgroundSize: "cover",
  },
  wrapper: {
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
  },
  text: {
    fontSize: "4em",
    position: "relative",
    fontWeight: "bold",
    overflowWrap: "break-word",
    maxWidth: "15vw",
    opacity: 1,
  },
  panelOpen: {
    transition: "all 0.8s ease-in-out",
    height: "60vh",
    width: "22vw",
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
    width: "22vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    backgroundColor: "black",
    position: "absolute",
  },

  noText: {
    fontSize: "4em",
    position: "relative",
    fontWeight: "bold",
    overflowWrap: "break-word",
    maxWidth: "15vw",
    opacity: 0,
  },
};
