import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { focusGamer, timeOver } from "../actions/gameActions";

const GameDisplay = ({ game, gameId }) => {
  const dispatch = useDispatch();
  const votes = useSelector(state => state.votes);
  const clickHandler = e => {
    var id = e.target.getAttribute("id");
    var el = document.getElementById(id);
    var li = document.querySelectorAll("li");
    for (var i = 0; i < li.length; i++) {
      li[i].classList.remove("focus");
    }
    el.classList.add("focus");
    dispatch(focusGamer(id));
  };

  const submitVote = () => {};
  return (
    <div className="containerM">
      <div id="day" className={game.night ? null : "sunshine"}>
        {game.night ? "Gece" : "Gündüz"}
      </div>
      <div className="gamers">
        <ul>
          {game
            ? game.users.map((gamer, i) => {
                return (
                  <li
                    className={gamer.isDead ? "dead" : null}
                    key={i}
                    id={gamer.userId}
                    onClick={gamer.isDead ? null : clickHandler}
                  >
                    {gamer.userName}
                    <span>
                      {votes
                        .filter(vote => vote[0] === gamer.userId)
                        .map(vote => {
                          return vote[1];
                        })}
                    </span>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <div id="submit">
        <button className="btn btn-primary" onClick={submitVote}>
          Turu Bitir
        </button>
      </div>

      <style jsx>{`
        .containerM {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          width: 100%;
        }
        #submit {
          width: 100%;
        }
        .btn {
          width: 100%;
          border-radius: 0;
          outline: none;
        }
        ul {
          width: 100%;
        }
        li {
          list-style-type: none;
          width: 100%;
          background: rgba(15, 76, 129, 0.3);
          margin-top: 10px;
          padding: 10px;
          cursor: pointer;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        li.dead {
          background: #1b262c;
          cursor: default;
        }
        li.dead:hover {
          background: #1b262c;
        }
        li span {
          float: right;
          margin-top: -5px;
          background: orange;
          padding: 2px;
          width: 30px;
          height: 28px;
          color: #333;
          border-radius: 50%;
          text-align: center;
          color: #333;
          font-weight: bold;
        }
        li:hover {
          background: rgba(15, 76, 129, 0.6);
        }
        li.focus {
          background: orange !important;
        }
        .gamers {
          display: flex;
          flex-direction: column;
          align-items: space-around;
          width: 100%;
          overflow: auto;
        }
        #day {
          padding: 6px;
          background: rgba(0, 0, 0, 0.1);
          width: 100%;
          text-align: center;
        }
        .sunshine {
          box-shadow: 0 0 60px 30px #fff, 0 0 100px 60px #999,
            0 0 140px 90px #333;
        }
      `}</style>
    </div>
  );
};
export default GameDisplay;
