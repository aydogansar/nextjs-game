import {
  START_GAME,
  FOCUS_GAMER,
  GET_GAMERS,
  GET_VOTES,
  EXECUTED_GAMER,
  NOBODY_DIED,
  GAME_OVER
} from "./types";
import loadDB from "../lib/db";
import { shuffle } from "./functions";
import { mode } from "./functions";

export const startGame = ({ users, roomId }) => async dispatch => {
  const db = await loadDB();
  let usersInfo = [];
  const roles = ["katil", "kahin"];
  const count = users.length - 2;
  //var colors = ["primary", "warning", "success", "secondary", "light", "info"];
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
      vote: "",
      isTimeOver: false
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

export const focusGamer = focusId => async dispatch => {
  const db = await loadDB();
  const gameId = localStorage.getItem("gameId");
  const userId = localStorage.getItem("userId");
  let users;
  const gameDB = db
    .firestore()
    .collection("games")
    .doc(gameId);

  gameDB
    .get()
    .then(doc => {
      users = doc.data().users;
    })
    .then(() => {
      users.map(user => {
        if (user.userId === userId) {
          user.vote = focusId;
        }
      });
      gameDB.update({
        users
      });
    });
  localStorage.setItem("focusGamerId", focusId);
  dispatch({
    type: FOCUS_GAMER,
    gamerId: focusId
  });
};

export const getGamers = id => async dispatch => {
  const db = await loadDB();
  const userId = localStorage.getItem("userId");
  db.firestore()
    .collection("games")
    .doc(id)
    .onSnapshot(function(doc) {
      let gamers = [];
      doc.data().users.forEach(user => {
        gamers.push({
          userId: user.userId,
          userName: user.userName,
          isDead: user.isDead,
          vote: user.vote
        });
      });
      let votes = [];
      gamers.map(gamer => {
        votes.push(gamer.vote);
      });
      let votesMode = mode(votes);
      dispatch({
        type: GET_VOTES,
        votes: votesMode
      });
      gamers = gamers.filter(gamer => gamer.userId !== userId);

      var role;
      doc
        .data()
        .users.filter(user => user.userId === userId)
        .map(user => {
          role = user.role;
        });

      const game = {
        users: gamers,
        createdAt: doc.data().createdAt.toDate(),
        night: doc.data().night,
        isOver: doc.data().isOver,
        winner: doc.data().winner,
        role
      };

      //localStorage.setItem("game", JSON.stringify(game));
      dispatch({
        type: GET_GAMERS,
        game
      });
    });
};
