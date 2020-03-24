import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

export const initialState = {
  username: "",
  userId: "",
  rooms: [],
  ownRoomId: "",
  focusRoomId: null,
  roomId: "",
  usersInRoom: [],
  messages: [],
  color: [],
  roomName: "",
  gameId: "",
  role: ""
};
/* combineReducer hatası var. Geçici çözüm tek reducer kullanıldı. */
export function initializeStore(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
