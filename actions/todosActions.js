import { GET_TODOS } from "./types";

export const getTodos = dispatch => {
  dispatch({
    type: GET_TODOS,
    payload: todos
  });
};
