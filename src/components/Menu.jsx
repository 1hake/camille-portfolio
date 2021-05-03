import React, { useContext, useEffect } from "react";
import { MyContext } from "../stores/Context";
import { menus } from "../data/content";

const classes = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
  },
  menuItem: {
    padding: "20px",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "black",
  },
  selected: {
    padding: "20px",
    color: "white",
    fontSize: "1.5em",
    fontWeight: "bold",
    textDecoration: "underline #E8C500",
    textDecorationThickness: "10px",
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
  const {
    state: { refs, currentPage },
  } = useContext(MyContext);

  useEffect(() => {
    if (refs[currentPage]) {
      scrollToRef(refs[currentPage]);
    }
  }, [currentPage, refs]);

  return (
    <div style={classes.container}>
      {menus.map((item) => {
        return <MenuItem name={item.name} />;
      })}
    </div>
  );
};
