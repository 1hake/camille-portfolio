import { db } from "../firebase";
import { toast } from "react-toastify";

export const getLinkById = async (id) => {
  const doc = await db.collection("links").doc(id).get();
  return { ...doc.data() };
};

export const getElements = async () => {
  db.collection("links").onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    return docs;
  });
};

export const onDeleteLink = async (id) => {
  if (window.confirm("are you sure you want to delete this link?")) {
    await db.collection("links").doc(id).delete();
    toast("Link Removed Successfully", {
      type: "error",
      autoClose: 2000,
    });
  }
};

export const addOrEditLink = async (linkObject, currentId) => {
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
    }
  } catch (error) {
    console.error(error);
  }
};
