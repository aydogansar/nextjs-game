import { ADD_USER } from "../actions/types";

const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        username: action.username,
        userId: action.userId
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
