import React, { Fragment } from "react";

const Read = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const renderTodos = todos.map((todo) => {
    return (
        <li
        style={{ color: todo.isCompleted ? "green" : "tomato" }}
        key={todo.id}
        >
            {todo.title}
        </li>

    ); 

});

  return (
    <Fragment>
      <h1 style={{color:"tomato"}}>Pending Todos</h1>
      <ol>{renderTodos}</ol>
    </Fragment>
  );
};

export default Read;
