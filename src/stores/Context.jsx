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

export const MyContext = React.createContext();

const initialState = {
  refs: {},
  loading: false,
  error: null,
  currentPage: menus[0].name,
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
    default:
      throw new Error();
  }
};

export const MainContext = (props) => {
  const [elements, setElements] = useState([]);
  const [currentId, setCurrentId] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [values, setValues] = useState(initialStateValues);
  const [state, dispatch] = useReducer(reducer, initialState);

  const getLinkById = async (id) => {
    const doc = await db.collection("links").doc(id).get();
    setValues({ ...doc.data() });
  };

  const getElements = async () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setElements(docs);
    });
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await db.collection("links").doc(id).delete();
      toast("Link Removed Successfully", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);
        toast("New Elements Added", {
          type: "success",
        });
      } else {
        await db.collection("links").doc(currentId).update(linkObject);
        toast("Elements Updated Successfully", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getElements();
  }, []);

  return (
    <MyContext.Provider
      value={{
        elements,
        onDeleteLink,
        addOrEditLink,
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
