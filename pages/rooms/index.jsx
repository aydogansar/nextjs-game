import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import RoomsList from "../../components/RoomsList";
import Head from "next/head";
import RoomModal from "../../components/RoomModal";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { joinRoom } from "../../actions/roomActions";

const Rooms = () => {
  const dispatch = useDispatch();
  let ownRoomId = useSelector(state => state.ownRoomId);
  const focus = useSelector(state => state.focusRoomId);
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    ownRoomId = localStorage.getItem("ownRoomId");
    var el = document.getElementById("joinRoom");
    el.disabled = true;
    // if (ownRoomId) {
    //   router.push("/rooms/[id]", "/rooms/" + ownRoomId);
    // }
    if (focus !== null) {
      el.disabled = false;
    }
  }, [ownRoomId, focus]);

  const joinRoomButton = () => {
    dispatch(joinRoom({ roomId: focus }));
  };
  return (
    <div>
      <Head>
        <title>Odalar - Game</title>
      </Head>
      <div className="containerM">
        <div className="rooms">
          <h3>Odalar</h3>
          <RoomsList />
        </div>
      </div>
      <div className="rightSection">
        <button className="createRoom btn btn-primary" onClick={toggle}>
          Oda Kur
        </button>
        <button
          id="joinRoom"
          className="createRoom btn btn-warning"
          onClick={joinRoomButton}
        >
          Odaya Katıl
        </button>
        <div></div>
      </div>
      <RoomModal modal={modal} toggle={toggle} />
      <style jsx>{`
        .containerM {
          display: flex;
          justify-content: center;
          height: 70%;
          min-height: 70%;
          width: 30%;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid #333;
          position: absolute;
          top: 15%;
          right: 35%;
          bottom: 0;
          overflow: auto;
        }
        .rightSection {
          display: flex;
          flex-direction: column;
          height: 70%;
          min-height: 70%;
          width: 10%;
          position: absolute;
          top: 15%;
          right: 24%;
          bottom: 0;
        }
        .createRoom {
          float: left;
          padding: 15px;
          width: 100%;
          height: 50px;
          margin-bottom: 10px;
        }
        h3 {
          text-align: center;
          margin-top: 10px;
          color: orange;
        }
        .rooms {
          width: 90%;
        }
      `}</style>
    </div>
  );
};
export default connect()(Rooms);
