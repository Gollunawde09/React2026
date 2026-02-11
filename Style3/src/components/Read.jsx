import { Fragment } from "react";
import style from "./Read.module.css";


const Read = (props) => {
  console.log(style);
  const todos = props.todos;
  const settodos = props.settodos;


 
  const rendertodos = todos.map((todo) => {
    return (
        <li key={todo.id}
        >
            {todo.title} | <span onClick={ () => DeleteHandler(todo)}>Delete</span>
        </li>

    ); 

});
 const DeleteHandler = (id) => {
    const filtedtodo = todos.filter((todo) => todo.id != id);
    settodos(filtedtodo);
  };

  

  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-5xl text-thin">
        <span className="text-pink-600">Pending</span> Todos</h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;
