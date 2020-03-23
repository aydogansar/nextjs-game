import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>Nextjs - Game</title>
      <link rel="icon" href="/static/favicon.ico" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    {props.children}
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
        border-radius:10px;
    }​
    `}</style>
  </div>
);

export default Layout;
