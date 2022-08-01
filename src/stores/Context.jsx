import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useReducer,
} from "react";

import { db } from "../firebase";
import { toast } from "react-toastify";
import { initialStateValues } from "../components/utils/constants";
import { menus } from "../data/content";
import { getElements } from "./firebaseAction";
import { useMediaQuery } from "react-responsive";


export const MyContext = React.createContext();

const initialState = {
  refs: {},
  loading: false,
  error: null,
  currentPage: menus[0].name,
  panelOpen: false,
  content: menus,
  currentPanel: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "STORE_REF":
      return {
        ...state,
        refs: {
          ...state.refs,
          [action.name]: action.ref,
        },
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.data,
      };
    case "SET_PANEL":
      return {
        ...state,
        panelOpen: true,
        currentPanel: action.data,
      };
    case "CLOSE_PANEL":
      return {
        ...state,
        panelOpen: false,
        currentPanel: null,
      };
    default:
      throw new Error("action is not defined");
  }
};

export const MainContext = (props) => {
  const [elements, setElements] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [values, setValues] = useState(initialStateValues);
  const [state, dispatch] = useReducer(reducer, initialState);
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })



  useEffect(() => {
    // getElements();
  }, []);

  return (
    <MyContext.Provider
      value={{
        elements,
        currentId,
        setCurrentId,
        editMode,
        setEditMode,
        values,
        setValues,
        state,
        dispatch,
        isMobile
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
