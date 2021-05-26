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

export const MyContext = React.createContext();

const initialState = {
  refs: {},
  loading: false,
  error: null,
  currentPage: menus[0].name,
  panelOpen: false,
  content: menus,
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
        panelOpen: action.data,
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
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
