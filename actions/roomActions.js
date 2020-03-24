import {
  GET_ROOMS,
  ADD_ROOM,
  FOCUS_ROOM,
  JOIN_ROOM,
  GET_USERS_IN_ROOM
} from "./types";
import loadDB from "../lib/db";
import { shuffle } from "./functions";

export const getRooms = () => async dispatch => {
  const db = await loadDB();
  db.firestore()
    .collection("rooms")
    .onSnapshot(snapshot => {
      let rooms = [];
      snapshot.forEach(function(doc) {
        rooms.push({
          id: doc.id,
          roomName: doc.data().roomName,
          ownerName: doc.data().ownerName,
          ownerId: doc.data().owner,
          users: doc.data().users
        });
      });
      dispatch({
        type: GET_ROOMS,
        rooms
      });
    });
};
export const addRoom = roomName => async dispatch => {
  const userName = localStorage.getItem("userName");
  const userId = localStorage.getItem("userId");
  console.log();
  const db = await loadDB();
  db.firestore()
    .collection("rooms")
    .add({
      roomName: roomName,
      ownerName: userName,
      ownerId: userId,
      users: [
        {
          userId,
          userName
        }
      ]
    })
    .then(docRef => {
      localStorage.setItem("ownRoomId", docRef.id);
      dispatch({
        type: ADD_ROOM,
        ownRoomId: docRef.id
      });
      db.firestore()
        .collection("chatbox")
        .doc(docRef.id + "chat")
        .set({
          users: [
            {
              userId,
              color: "primary"
            }
          ],
          chat: []
        });
    });
};

export const joinRoom = ({ roomId }) => async dispatch => {
  const db = await loadDB();
  const userName = localStorage.getItem("userName");
  const userId = localStorage.getItem("userId");
  let user = {
    userName,
    userId
  };
  db.firestore()
    .collection("rooms")
    .doc(roomId)
    .update({
      users: db.firestore.FieldValue.arrayUnion(user)
    })
    .then(() => {
      localStorage.setItem("roomId", roomId);
      dispatch({
        type: JOIN_ROOM,
        roomId
      });
    });
  const colors = ["warning", "success", "secondary", "light", "info"];
  const c = shuffle(colors);
  db.firestore()
    .collection("rooms")
    .doc(roomId)
    .onSnapshot(function(doc) {
      var length = doc.data().users.length;
      var user = {
        userId,
        color: c[length - 2]
      };
      db.firestore()
        .collection("chatbox")
        .doc(roomId + "chat")
        .update({
          users: db.firestore.FieldValue.arrayUnion(user)
        });
    });
};

export const focusRoom = focus => {
  return {
    type: FOCUS_ROOM,
    focusRoomId: focus
  };
};

export const getUsersInRoom = ({ roomId }) => async dispatch => {
  const db = await loadDB();
  db.firestore()
    .collection("rooms")
    .doc(roomId)
    .onSnapshot(function(doc) {
      let users = [];
      doc.data().users.forEach(user => {
        users.push({
          userName: user.userName,
          userId: user.userId
        });
      });
      dispatch({
        type: GET_USERS_IN_ROOM,
        usersInRoom: users,
        roomName: doc.data().roomName
      });
    });
};
