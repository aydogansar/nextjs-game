import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
//import reducer from "./reducers";
import todosReducer from "./reducers/todosReducer";

export const initialState = {
  todos: ["ahmet", "mehmet"]
};

export function initializeStore(initialState) {
  return createStore(
    todosReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
