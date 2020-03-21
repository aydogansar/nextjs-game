import { loadDB } from "../lib/db";
import { ADD_USER } from "./types";

export const addUser = username => async dispatch => {
  const db = await loadDB();

  db.firestore()
    .collection("users")
    .add({
      name: username
    })
    .then(docRef => {
      localStorage.setItem("userId", JSON.stringify(docRef.id));
      dispatch({
        type: ADD_USER,
        username,
        userId: docRef.id
      });
    });
};

export const getUsers = () => async dispatch => {
  const db = await loadDB();

  db.firestore()
    .collection("users")
    .onSnapshot(snapshot => {
      let users = [];
      snapshot.forEach(function(doc) {
        users.push({
          id: doc.id,
          name: doc.data().name
        });
      });
      dispatch({
        type: "GET_USERS",
        users
      });
    });
};
