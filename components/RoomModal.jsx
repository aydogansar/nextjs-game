import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addRoom } from "../actions/roomActions";

const RoomModal = ({ modal, toggle }) => {
  const dispatch = useDispatch();
  const [roomName, setRoomName] = useState("");
  const changeHandler = e => {
    setRoomName(e.target.value);
  };
  const createRoom = e => {
    e.preventDefault();
    if (roomName !== "") {
      dispatch(addRoom(roomName));
      toggle();
    }
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} style={{ color: "#0f4c81" }}>
        <form>
          <ModalHeader toggle={toggle}>Yeni Oda</ModalHeader>
          <ModalBody>
            <input
              type="text"
              placeholder="Oda İsmi"
              className="text"
              maxLength="25"
              onChange={changeHandler}
              required
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={createRoom}>
              Kur
            </Button>
            <Button color="danger" onClick={toggle}>
              Vazgeç
            </Button>
          </ModalFooter>
        </form>
      </Modal>
      <style jsx>{`
        .text {
          border: 0;
          border-bottom: 1px solid #0f4c81;
          outline: 0;
          padding: 10px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default RoomModal;
