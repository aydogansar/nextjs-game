import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUsersInRoom } from "../../actions/roomActions";
import { startGame, jumpTheGame } from "../../actions/gameActions";
import ChatBox from "../../components/ChatBox";
import { Tooltip } from "reactstrap";

const Room = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const users = useSelector(state => state.usersInRoom);
  const roomName = useSelector(state => state.roomName);
  const gameId = useSelector(state => state.gameId);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [ownRoom, setOwnRoom] = useState("");

  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(() => {
    dispatch(getUsersInRoom({ roomId: id }));
    const ownRoomId = localStorage.getItem("ownRoomId");
    if (ownRoomId) setOwnRoom(ownRoomId);
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    dispatch(jumpTheGame(userId));
    if (gameId) router.push("/game/[id]", "/game/" + gameId);
  }, [gameId]);

  const gameStart = e => {
    e.preventDefault();
    dispatch(startGame({ users, roomId: id }));
  };
  return (
    <div>
      <div className="containerM">
        <Head>
          <title>{roomName} | Game</title>
        </Head>
        <button id="exit" className="btn btn-danger">
          <span className="exitImage"></span>
        </button>
        <Tooltip
          placement="bottom"
          isOpen={tooltipOpen}
          target="exit"
          toggle={toggle}
        >
          Odadan Çık
        </Tooltip>
        <div className="section">
          <div className="users">
            <h2 style={{ textShadow: "2px 2px #000" }}>{`{ ${roomName} }`}</h2>
            <ul>
              {users.map((user, i) => {
                return <li key={i}>{user.userName}</li>;
              })}
            </ul>
            <div>
              {ownRoom === id ? (
                <button
                  type="submit"
                  className="btn btn-primary start"
                  onClick={gameStart}
                >
                  Oyunu Başlat
                </button>
              ) : null}
            </div>
          </div>
          <ChatBox roomId={id} chatMinWidth="40%" />
        </div>
      </div>
      <style jsx>{`
        .containerM {
          display: flex;
          justify-content: center;
          height: 80%;
          max-height: 1200px;
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
          z-index: 0;
        }
        h2 {
          margin: 10px 0 0 10px;
          color: orange;
        }
        li {
          list-style-type: none;
          padding: 15px;
          margin: 10px;
          background: rgba(15, 76, 129, 0.3);
          border-radius: 3px;
          border: 1px solid #0f4c81;
        }
        .section {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }
        .users {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
        }
        ul {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          flex-direction: row;
          alig-items: center;
        }
        .start {
          align-self: flex-end;
          width: 100%;
          border-radius: 0;
          transition: all 0.5s;
        }
        .start:hover {
          box-shadow: 0 0 60px 30px #fff, 0 0 100px 60px #f0f,
            0 0 140px 90px #0ff;
        }
        #exit {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          width: 30px;
          position: absolute;
          left: 0px;
        }
        .exitImage {
          content: "";
          background: url("/static/exit.png") no-repeat center;
          width: 20px;
          height: 20px;
          margin-right: -5px;
          float: right;
          position: relative;
        }
      `}</style>
    </div>
  );
};
export default Room;
