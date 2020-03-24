import { START_GAME } from "./types";
import loadDB from "../lib/db";
import { shuffle } from "./functions";

export const startGame = ({ users, roomId }) => async dispatch => {
  const db = await loadDB();
  let usersInfo = [];
  const roles = ["katil", "kahin"];
  const count = users.length - 2;
  var colors = ["primary", "warning", "success", "secondary", "light", "info"];
  for (let i = 1; i <= count; i++) {
    roles.push("halk");
  }
  const shuffledRoles = shuffle(roles);
  users.forEach((user, i) => {
    usersInfo.push({
      userName: user.userName,
      userId: user.userId,
      isDead: false,
      role: shuffledRoles[i],
      vote: ""
    });
  });
  db.firestore()
    .collection("games")
    .add({
      createdAt: db.firestore.Timestamp.fromDate(new Date()),
      isOver: false,
      users: usersInfo,
      winner: "",
      roomId
    })
    .then(docRef => {
      localStorage.setItem("gameId", docRef.id);
      dispatch({
        type: START_GAME,
        gameId: docRef.id
      });
      users.forEach(user => {
        db.firestore()
          .collection("users")
          .doc(user.userId)
          .update({
            gameId: docRef.id
          });
      });
      var color = JSON.parse(localStorage.getItem("color"));
      db.firestore()
        .collection("chatbox")
        .doc(docRef.id + "chat")
        .set({
          users: color,
          chat: []
        });
    });
};
export const jumpTheGame = userId => async dispatch => {
  const db = await loadDB();
  let gameId;
  db.firestore()
    .collection("users")
    .doc(userId)
    .onSnapshot(function(doc) {
      gameId = doc.data().gameId;
      if (gameId !== "") {
        localStorage.setItem("gameId", gameId);
        dispatch({
          type: START_GAME,
          gameId
        });
      }
    });
};
