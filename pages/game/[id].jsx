import React from "react";
import { useRouter } from "next/router";
import ChatBox from "../../components/ChatBox";

const Game = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="containerM">
      <div className="section">
        <div className="role"></div>
        <div className="users"></div>
        <ChatBox roomId={id} chatMinWidth="0" />
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
          top: 10%;
          right: 15%;
          bottom: 0;
          overflow: auto;
          flex-wrap: wrap;
          flex-direction: column;
          z-index: 0;
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
