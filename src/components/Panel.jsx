import React, {
  useRef,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { MyContext } from "../stores/Context";

const classes = {
  panel: {
    height: "100vh",
    width: "100%",
  },
};

export const Panel = ({ name, color, children }) => {
  const { dispatch } = useContext(MyContext);
  const myRef = useRef(null);

  useEffect(() => {
    dispatch({ type: "STORE_REF", ref: myRef, name: name });
  }, [dispatch, name]);

  return (
    <div ref={myRef} style={{ ...classes.panel, backgroundColor: color }}>
      {children}
    </div>
  );
};
