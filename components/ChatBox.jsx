import React, { useState, useEffect } from "react";
import { Badge } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, getMessages } from "../actions/chatActions";

const ChatBox = ({ roomId, chatMinWidth }) => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages);
  const colorMap = useSelector(state => state.color);
  const [scroll, setScroll] = useState(0);
  // const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch(getMessages({ roomId }));
  }, []);

  useEffect(() => {
    var el = document.getElementById("messages");
    setScroll(el.scrollHeight);
    el.scrollTop = scroll;
  });

  const colorSelect = id => {
    return colorMap
      .filter(c => {
        return c.userId === id;
      })
      .map(c => {
        return c.color;
      })[0];
  };
  // const changeHandler = e => {
  //   setMessage(e.target.value);
  // };
  const submitHandler = e => {
    e.preventDefault();
    var el = document.getElementById("text");
    dispatch(sendMessage(el.value, roomId));
    el.value = "";
  };
  return (
    <div className="chatBox">
      <div className="messageBox" id="messages">
        <ul>
          {messages.length === 0 ? (
            <li>
              <span className="text-muted">Mesaj Yok</span>
            </li>
          ) : (
            messages.map((m, i) => {
              return (
                <li key={i}>
                  <Badge color={colorSelect(m.userId)}>{m.userName}</Badge>
                  <span>{m.message}</span>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="bottom">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="text"
            className="text"
            placeholder="Buraya yaz..."
          />
        </form>
      </div>
      <style jsx>{`
        .chatBox {
          display: flex;
          flex-direction: column;
          align-content: space-between;
          max-width: 300px;
          min-width: ${chatMinWidth};
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid #333;
          overflow: hidden;
        }
        #messages {
          display: flex;
          align-self: flex-start;
          flex-direction: column;
          align-items: flex-end;
          justify-content: stretch;
          height: 100%;
          overflow: auto;
          padding: 10px;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          flex-direction: row;
          justify-content: flex-start;
          width: 100%;
        }
        li {
          width: 120%;
          margin: 1px;
          list-style-type: none;
          margin-left: -35px;
        }
        li span {
          margin-left: 10px;
        }
        .text {
          width: 100%;
          padding: 6px;
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
