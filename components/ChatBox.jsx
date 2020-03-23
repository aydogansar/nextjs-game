import React, { useState, useEffect } from "react";
import { Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, getMessages } from "../actions/chatActions";

const ChatBox = ({ roomId }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const messages = useSelector(state => state.messages);
  const colorMap = useSelector(state => state.color);

  useEffect(() => {
    dispatch(getMessages({ roomId }));
  }, []);
  const colorSelect = id => {
    return colorMap
      .filter(c => {
        return c.userId === id;
      })
      .map(c => {
        return c.color;
      })[0];
  };
  const changeHandler = e => {
    setMessage(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    dispatch(sendMessage(message, roomId));
    setMessage("");
  };
  return (
    <div className="chatBox">
      <div className="messageBox">
        <ul>
          {messages.map((m, i) => {
            return (
              <li key={i}>
                <Badge color={colorSelect(m.userId)}>{m.userName} :</Badge>
                <span>{m.message}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="text"
            onChange={changeHandler}
            value={message}
            placeholder="Buraya yaz..."
          />
        </form>
      </div>
      <style jsx>{`
        .chatBox {
          display: flex;
          flex-direction: column;
          align-content: space-between;
          max-width: 40%;
          min-width: 40%;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid #333;
          overflow: auto;
        }
        .messageBox {
          display: flex;
          align-self: flex-start;
          flex-direction: column;
          align-items: flex-start;
          height: 95%;
          overflow: auto;
          padding: 10px;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          align-content: flex-end;
          justify-content: flex-start;
        }
        li {
          list-style-type: none;
          width: 100%;
          margin-left: -35px;
        }
        li span {
          margin-left: 10px;
        }
        .bottom {
          align-selft: flex-end;
        }
        .text {
          width: 100%;
          padding: 5px;
          outline: none;
          background: #1b262c;
          border: 0;
          color: #fff;
        }
      `}</style>
    </div>
  );
};
export default ChatBox;
