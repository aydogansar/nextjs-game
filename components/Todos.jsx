import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../actions";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos(todos));
  }, []);

  return (
    <ul>
      {todos
        .filter(todo => todo.userId === 5)
        .map(todo => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
    </ul>
  );
};
export default Todos;
