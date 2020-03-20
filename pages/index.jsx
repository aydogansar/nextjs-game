import React from "react";
import { connect } from "react-redux";

const Home = ({ todos }) => {
  return (
    <React.Fragment>
      <h1>Merhaba Burası anasayfa</h1>
      <ul>
        {todos.map(todo => {
          return <li>{todo}</li>;
        })}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Home);
