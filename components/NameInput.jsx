import React, { useState, useEffect } from "react";
import { addUser } from "../actions/UserActions";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { useRouter } from "next/router";

const initialState = {
  username: ""
};
const NameInput = props => {
  const router = useRouter();
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    var el = document.getElementById("button");
    if (state.username === "") {
      el.disabled = true;
      el.classList.remove("buttonEffect");
    } else {
      el.disabled = false;
      el.classList.add("buttonEffect");
    }
  });

  const changeHandler = e => {
    setState({
      ...state,
      username: e.target.value
    });
  };
  const submitName = e => {
    e.preventDefault();
    if (state.username !== "") {
      dispatch(addUser(state.username));
      router.push("/rooms");
    }
  };
  const keyPressHandler = e => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitName}>
        <div className="row">
          <input
            type="text"
            name="username"
            placeholder="Takma Ad"
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            maxLength="20"
            required
          />
        </div>
        <div className="row">
          <Button id="button" color="primary" className="button">
            Oyuna Gir !
          </Button>
        </div>
      </form>
      <style jsx global>{`
        input {
          border: 0;
          outline: 0;
          background: transparent;
          border-bottom: 1px solid #0f4c81;
          padding: 20px 20px 5px 20px;
          color: #fff;
          font-size: 32px;
          text-align: center;
        }
        .button {
          margin: 0 auto;
          margin-top: 40px;

          overflow: hidden;

          padding: 8px 25px;
        }
        .buttonEffect {
          transition: all 0.3s;
          transform: translate(0, 0);
        }
        .buttonEffect:hover {
          transform: scale(1.1, 1.1);
        }
        .buttonEffect::before {
          position: absolute;
          content: "";
          top: 0;
          left: -110%;
          bottom: 0;
          width: 30%;
          background-color: rgba(255, 255, 255, 0.3);
          transform: skewX(-30deg);
          transition: left 0.7s ease-in-out;
        }
        .buttonEffect:hover::before {
          left: 120%;
        }
      `}</style>
    </div>
  );
};
export default NameInput;
