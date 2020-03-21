import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import RoomsList from "../components/RoomsList";
import Head from "next/head";

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const Rooms = () => {
  return (
    <motion intial="initial" animate="enter" variants={postVariants}>
      <div className="containerM">
        <Head>
          <title>Odalar - Game</title>
        </Head>
        <div className="rooms">
          <h3>Odalar</h3>
          <RoomsList />
        </div>
        <style global jsx>{`
          html,
          body {
            height: 100%;
            margin: 0px;
            position: relative;
            min-height: 100%;
          }
        `}</style>
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
          }
          h3 {
            text-align: center;
            margin-top: 10px;
          }
          .rooms {
            width: 90%;
          }
        `}</style>
      </div>
    </motion>
  );
};
export default connect()(Rooms);
