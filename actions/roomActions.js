import { GET_ROOMS, ADD_ROOM, FOCUS_ROOM } from "./types";
import { loadDB } from "../lib/db";

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
    });
  localStorage.setItem("roomId", roomId);
};

export const focusRoom = focus => {
  return {
    type: FOCUS_ROOM,
    focusRoomId: focus
  };
};
