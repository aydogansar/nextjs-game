import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms, focusRoom } from "../actions/roomActions";

const RoomsList = () => {
  const rooms = useSelector(state => state.rooms);
  const focus = useSelector(state => state.focusRoomId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRooms());
    if (focus !== null) {
      var el = document.getElementById(focus);
      var tr = document.querySelectorAll("tr");
      for (var i = 0; i < tr.length; i++) {
        tr[i].classList.remove("focus");
      }

      el.classList.add("focus");
    }
  }, [focus]);

  const clickHandler = e => {
    dispatch(focusRoom(e.target.parentNode.getAttribute("id")));
  };
  return (
    <div className="roomList">
      <table id="table" className="roomTable">
        <thead>
          <tr>
            <th>Oda İsmi</th>
            <th>Oda Sahibi</th>
            <th>Kişi Sayısı</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, i) => {
            return (
              <tr id={room.id} key={i} onClick={clickHandler}>
                <td>{room.roomName}</td>
                <td>{room.ownerName}</td>
                <td>{room.users.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        .roomTable {
          width: 100%;
          text-align: center;
        }
        .roomTable td,
        th {
          padding: 2px;
        }
        .roomTable tbody tr {
          transform: translate(0, 0);
          overflow: hidden;
          border: 1px solid transparent;
        }
        .roomTable tbody tr:hover {
          cursor: pointer;
          background: rgba(15, 76, 129, 0.5);
          border-color: #333;
        }
        .focus {
          background: orange !important;
        }
        .roomList li {
          list-style-type: none;
          margin-left: 0;
        }
      `}</style>
    </div>
  );
};
export default RoomsList;
