import { GET_TODOS } from "./types";
import axios from "axios";

export const getTodos = () => {
  return function(dispatch) {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(({ data }) => {
        dispatch({ type: GET_TODOS, todos: data });
      });
  };
};
