import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
//import reducer from "./reducers";
import userReducer from "./reducers/userReducer";

export const initialState = {
  username: "",
  users: []
};

export function initializeStore(initialState) {
  return createStore(
    userReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
