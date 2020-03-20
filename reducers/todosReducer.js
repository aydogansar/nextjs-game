import { GET_TODOS } from "../actions/types";
import { initialState } from "../store";

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.todos
      };
    default:
      return state;
  }
};
export default todosReducer;
