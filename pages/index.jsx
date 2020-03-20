import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { connect } from "react-redux";
import Head from "next/head";
import NameInput from "../components/NameInput";
import { getUsers } from "../actions/UserActions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const users = useSelector(state => state.users);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
      </Head>
      <h1>Merhaba Burası anasayfa</h1>
      <NameInput />
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default connect()(Home);
