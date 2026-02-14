import { Fragment } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Read = () => {
   const [todos, settodos] = useContext(todocontext);
    

 

   const DeleteHandler = (id) => {
    const filtedtodo = todos.filter((todo) => todo.id != id);
    settodos(filtedtodo);
    toast.error("Todo deleted!");
  };

  const rendertodos = todos.map((todo) => {
    return (
        <li key={todo.id}
        >
            {todo.title} | <span onClick={ () => DeleteHandler(todo)}>Delete</span>
        </li>

    ); 

});

  

  return (
    <div className="w-[40%] p-10">
      <h1 className="mb-10 text-5xl text-thin">
        <span className="text-pink-600">Pending</span> Todos</h1>
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;
