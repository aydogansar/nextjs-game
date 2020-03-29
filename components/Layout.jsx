import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

const Layout = props => {
  const name = useSelector(state => state.username);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (name === "") setUserName(localStorage.getItem("userName"));
  }, [userName]);
  return (
    <div>
      <Head>
        <title>Nextjs - Game</title>
        <link rel="icon" href="/static/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="header">
        <span>{name === "" ? userName : name}</span>
      </div>
      {props.children}
      <div className="footer">
        <a href="https://github.com/aydogansar" target="_blank">
          <span className="github">Github/aydogansar</span>
        </a>
        <span>Beta v.1</span>
      </div>
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap");
        body {
          background: #1b262c;
          color: #fff;
          font-family: "Baloo Da 2", cursive;
        }
        ::-webkit-scrollbar {
          width: 3px;
        }
        ::-webkit-scrollbar-button {
          background: #1b262c;
        }
        ::-webkit-scrollbar-track-piece {
          background: #1b262c;
        }
        ::-webkit-scrollbar-thumb {
          background: #0f4c81;
          border-radius: 10px;
        }
        ​.footer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px;
          background: #fff;
        }
      `}</style>
      <style jsx>{`
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 3px;
          background: rgba(15, 76, 129, 0.3);
          text-align: center;
        }
        .footer span.github::before {
          float: left;
          position: relative;
          bottom: 5px;
          content: "";
          background: url("/static/github.png") no-repeat center;
          width: 32px;
          height: 32px;
        }
        .footer span {
          height: 35px;
          padding: 5px;
          font-weight: bolder;
          border-radius: 3px;
          float: right;
        }
        .footer span.github:hover {
          background: #fff;
          cursor: pointer;
          color: #0f4c81;
        }
        .footer a:link,
        a:visited {
          color: #fff;
        }
        .header {
          text-align: right;
          padding: 5px;
        }
        .header span {
          padding: 5px;
          background: #fff;
          color: #0f4c81;
          border-radius: 3px;
          float: right;
          margin: 5px 5px 0 0;
          font-weight: bolder;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Layout;
