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
    `}</style>
  </div>
);

export default Layout;
