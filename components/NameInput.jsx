import React, { useState } from "react";
import { addUser } from "../actions/UserActions";
import { useDispatch } from "react-redux";

const initialState = {
  username: ""
};
const NameInput = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const changeHandler = e => {
    setState({
      ...state,
      username: e.target.value
    });
  };
  const submitName = e => {
    e.preventDefault();
    dispatch(addUser(state.username));
  };

  return (
    <div>
      <form onSubmit={submitName}>
        <input
          type="text"
          name="username"
          placeholder="İsim Yaz..."
          onChange={changeHandler}
        />
        <button type="submit">Başla</button>
      </form>
    </div>
  );
};
export default NameInput;
