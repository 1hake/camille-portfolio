import React, { useContext, useState } from "react";
import { MyContext } from "../../stores/Context";

export const ImageContainer = ({ image }) => {
  const {
    dispatch,
    state: { panelOpen },
  } = useContext(MyContext);

  const [open, setOpen] = useState(false);
  return (
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
    ></div>
  );
};

const classes = {
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
};
