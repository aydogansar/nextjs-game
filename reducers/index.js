import {
  GET_ROOMS,
  ADD_USER,
  ADD_ROOM,
  FOCUS_ROOM,
  JOIN_ROOM
} from "../actions/types";
import { initialState } from "../store";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        username: action.username,
        userId: action.userId
      };
    case GET_ROOMS:
      return {
        ...state,
        rooms: action.rooms
      };
    case ADD_ROOM:
      return {
        ...state,
        ownRoomId: action.ownRoomId
      };
    case FOCUS_ROOM:
      return {
        ...state,
        focusRoomId: action.focusRoomId
      };
    case FOCUS_ROOM:
      return {
        ...state,
        roomId: action.roomId
      };
    default:
      return state;
  }
};
export default reducer;
