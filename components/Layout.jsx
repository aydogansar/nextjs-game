import Head from "next/head";

const Layout = props => (
  <div>
    <Head>
      <title>Nextjs - Game</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    {props.children}
  </div>
);

export default Layout;
