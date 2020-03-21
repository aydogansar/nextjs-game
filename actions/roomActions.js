import { GET_ROOMS } from "./types";
import { loadDB } from "../lib/db";

export const getRooms = () => async dispatch => {
  const db = await loadDB();
  let rooms = [];
  db.firestore()
    .collection("rooms")
    .onSnapshot(snapshot => {
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
  return rooms;
};
