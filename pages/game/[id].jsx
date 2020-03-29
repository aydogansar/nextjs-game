import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ChatBox from "../../components/ChatBox";
import Role from "../../components/Role";
import GameDisplay from "../../components/GameDisplay";
import { useSelector, useDispatch } from "react-redux";
import { getGamers } from "../../actions/gameActions";

const Game = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const game = useSelector(state => state.game);

  useEffect(() => {
    dispatch(getGamers(id));
  }, []);
  return (
    <div className="containerM">
      <Head>
        <title>Game</title>
      </Head>
      <div className="section">
        <Role role={game.role} />
        <GameDisplay game={game} gameId={id} />
        <ChatBox roomId={id} chatMinWidth="300px" />
      </div>
      <style jsx>{`
        .containerM {
          display: flex;
          justify-content: center;
          height: 80%;
          max-height: 1200px;
          width: 70%;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid #333;
          position: absolute;
          right: 15%;
          top: 10%;
          bottom: 0;
          overflow: auto;
          flex-wrap: wrap;
          flex-direction: column;
        }
        .section {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
export default Game;
