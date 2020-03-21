import { GET_ROOMS, ADD_USER } from "../actions/types";
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
    default:
      return state;
  }
};
export default reducer;
