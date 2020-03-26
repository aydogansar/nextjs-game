import {
  GET_ROOMS,
  ADD_USER,
  ADD_ROOM,
  FOCUS_ROOM,
  JOIN_ROOM,
  GET_USERS_IN_ROOM,
  SEND_MESSAGE,
  GET_MESSAGES,
  START_GAME,
  FOCUS_GAMER,
  GET_GAMERS,
  GET_VOTES,
  EXECUTED_GAMER,
  NOBODY_DIED,
  GAME_OVER
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
    case JOIN_ROOM:
      return {
        ...state,
        roomId: action.roomId
      };
    case GET_USERS_IN_ROOM:
      return {
        ...state,
        usersInRoom: action.usersInRoom,
        roomName: action.roomName
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
        color: action.color
      };
    case START_GAME:
      return {
        ...state,
        gameId: action.gameId
      };
    case FOCUS_GAMER:
      return {
        ...state,
        focusGamerId: action.gamerId
      };
    case GET_GAMERS:
      return {
        ...state,
        game: action.game
      };
    case GET_VOTES:
      return {
        ...state,
        votes: [...action.votes]
      };
    case EXECUTED_GAMER:
      return {
        ...state,
        executedGamer: action.user
      };
    case NOBODY_DIED:
      return {
        ...state,
        nobodyDied: action.nobodyDied
      };
    default:
      return state;
  }
};
export default reducer;
