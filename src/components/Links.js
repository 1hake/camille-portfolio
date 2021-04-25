import React, { useContext } from "react";
import LinksForm from "./LinksForm";
import { useHistory } from "react-router-dom";

import { MyContext } from "../stores/Context";

export const Links = () => {
  const context = useContext(MyContext);
  console.log("🚀 ~ file: Links.js ~ line 8 ~ Links ~ context", context);
  let history = useHistory();
  // https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
  return (
    <>
      {/* <div className="col-md-4 p-2">
        
      </div> */}
      <div className="col-md-12">
        {context && !context.editMode ? (
          context.elements &&
          context.elements.map((link) => (
            <div className="card mb-1" key={link.id}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{link.name}</h4>
                  <div>
                    <i
                      className="material-icons text-danger"
                      onClick={() => context.onDeleteLink(link.id)}
                    >
                      close
                    </i>
                    <i
                      className="material-icons"
                      onClick={() => {
                        history.push("/create");
                        context.setCurrentId(link.id);
                        context.setEditMode(!context.editMode);
                      }}
                    >
                      create
                    </i>
                  </div>
                </div>
                <p>{link.description}</p>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  Go to Website
                </a>
              </div>
            </div>
          ))
        ) : (
          <LinksForm />
        )}
      </div>
    </>
  );
};
