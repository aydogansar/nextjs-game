import { ADD_USER } from "../actions/types";
import { initialState } from "../store";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        username: action.username
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};
export default userReducer;
