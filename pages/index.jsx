import React, { useEffect } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";
import NameInput from "../components/NameInput";
import { motion } from "framer-motion";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      router.push("/rooms");
    }
  });
  return (
    <div>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <div className="containerM">
        <NameInput />
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
          align-items: center;
          height: 50%;
          min-height: 50%;
          width: 50%;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid #333;
          border-radius: 5px;
          position: absolute;
          top: 25%;
          right: 25%;
          bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default connect()(Home);
