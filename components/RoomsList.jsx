import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../actions/roomActions";
import { Badge, Table } from "reactstrap";

const RoomsList = () => {
  const rooms = useSelector(state => state.rooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRooms());
  }, []);
  return (
    <div className="roomList">
      <table className="roomTable">
        <thead>
          <tr>
            <th>Oda İsmi</th>
            <th>Oda Sahibi</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, i) => {
            return (
              <tr key={i}>
                <td id={i}>{room.roomName}</td>
                <td>
                  <Badge color="warning">{room.ownerName}</Badge>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <style jsx>{`
        .roomTable {
          width: 100%;
        }
        .roomTable td,
        th {
          padding: 10px;
        }
        .roomTable tbody tr {
          transform: translate(0, 0);
          overflow: hidden;
        }
        .roomTable tbody tr:hover {
          cursor: pointer;
          border-color: rgba(15, 76, 129, 0.3);
          background: rgba(15, 76, 129, 0.5);
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
