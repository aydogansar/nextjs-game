import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";

const Home = ({ todos }) => {
  return (
    <React.Fragment>
      <h1>Merhaba Burası anasayfa</h1>
      <Todos />
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
// const mapDispatchToProps = dispatch => {
//   return dispatch(getTodos());
// };

export default connect(mapStateToProps)(Home);
