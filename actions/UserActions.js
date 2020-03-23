import loadDB from "../lib/db";
import { ADD_USER } from "./types";

export const addUser = username => async dispatch => {
  const db = await loadDB();

  db.firestore()
    .collection("users")
    .add({
      name: username
    })
    .then(docRef => {
      localStorage.setItem("userId", docRef.id);
      localStorage.setItem("userName", username);
      dispatch({
        type: ADD_USER,
        username,
        userId: docRef.id
      });
    });

  // db.auth()
  //   .signInAnonymously()
  //   .catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });

  //invalid/api-key hatası env değişkenleri ile alakalı
};
