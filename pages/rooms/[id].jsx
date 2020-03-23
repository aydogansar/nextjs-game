import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUsersInRoom } from "../../actions/roomActions";
import ChatBox from "../../components/ChatBox";

const Room = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersInRoom);
  const roomName = useSelector(state => state.roomName);

  useEffect(() => {
    dispatch(getUsersInRoom({ roomId: id }));
  });
  return (
    <div className="containerM">
      <div className="section">
        <div className="users">
          <h2>{`{ ${roomName} }`}</h2>
          <ul>
            {users.map((user, i) => {
              return <li key={i}>{user.userName}</li>;
            })}
          </ul>
        </div>
        <ChatBox roomId={id} />
      </div>
      <style jsx>{`
        .containerM {
          display: flex;
          justify-content: center;
          height: 80%;
          min-height: 80%;
          width: 50%;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid #333;
          position: absolute;
          top: 10%;
          right: 25%;
          bottom: 0;
          overflow: auto;
          flex-wrap: wrap;
          flex-direction: column;
        }
        h2 {
          margin: 10px 0 0 10px;
          color: orange;
        }
        li {
          list-style-type: none;
          padding: 15px;
          margin: 10px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          border: 1px solid #0f4c81;
        }
        .section {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }
        ul {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          flex-direction: row;
        }
      `}</style>
    </div>
  );
};
export default Room;
