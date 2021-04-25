import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase";
import { toast } from "react-toastify";
import { MyContext } from "../stores/Context";
import MDEditor from "@uiw/react-md-editor";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { validURL } from "./utils/validation";
import { initialStateValues } from "./utils/constants";

const LinksForm = (props) => {
  const {
    setValues,
    values,
    addOrEditLink,
    currentId,
    getLinkById,
  } = useContext(MyContext);
  const [editorState, setEditorState] = React.useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleTextChange = (e) => {
    setEditorState(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validURL(values.url)) {
      return toast("invalid url", { type: "warning", autoClose: 1000 });
    }

    addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://someurl.xyz"
          value={values.url}
          name="url"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          value={values.name}
          name="name"
          placeholder="Website Name"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          name="description"
          onEditorStateChange={handleTextChange}
        />
      </div>

      <button className="btn btn-primary btn-block">
        {currentId === "" ? "Save" : "Update"}
      </button>
    </form>
  );
};

export default LinksForm;
