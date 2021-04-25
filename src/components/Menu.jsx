import React, { useContext } from "react";
import { MyContext } from "../stores/Context";
import { menus } from "../data/content";

const classes = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Source Sans Pro",
    marginRight: "10px",
  },
  menuItem: {
    padding: "20px",
  },
  selected: {
    padding: "20px",
    color: "black",
  },
};

const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop);
};

const MenuItem = ({ name }) => {
  const {
    state: { refs, currentPage },
    dispatch,
  } = useContext(MyContext);

  return (
    <div
      onClick={() => {
        dispatch({ type: "SET_CURRENT_PAGE", data: name });
        scrollToRef(refs[name]);
      }}
      style={currentPage === name ? classes.selected : classes.menuItem}
    >
      {name}
    </div>
  );
};

export const Menu = () => {
  return (
    <div style={classes.container}>
      {menus.map((item) => {
        return <MenuItem name={item.name} />;
      })}
    </div>
  );
};
