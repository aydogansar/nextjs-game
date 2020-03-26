import { SEND_MESSAGE, GET_MESSAGES } from "./types";
import loadDB from "../lib/db";

export const sendMessage = (message, roomId) => async dispatch => {
  const db = await loadDB();
  const userName = localStorage.getItem("userName");
  const userId = localStorage.getItem("userId");
  let chatMessage = {
    userName,
    userId,
    message
  };
  db.firestore()
    .collection("chatbox")
    .doc(roomId + "chat")
    .update({
      chat: db.firestore.FieldValue.arrayUnion(chatMessage)
    });
  // .then(() => {
  //   dispatch({
  //     type: SEND_MESSAGE,
  //     message: chatMessage
  //   });
  // });
};
export const getMessages = ({ roomId }) => async dispatch => {
  const db = await loadDB();
  db.firestore()
    .collection("chatbox")
    .doc(roomId + "chat")
    .onSnapshot(function(doc) {
      let messages = [];
      doc.data().chat.forEach(m => {
        messages.push({
          message: m.message,
          userName: m.userName,
          userId: m.userId
        });
      });
      var color = doc.data().users;
      localStorage.setItem("color", JSON.stringify(color));
      dispatch({
        type: GET_MESSAGES,
        messages,
        color
      });
    });
};
