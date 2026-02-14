import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: "Kamm krle bhai", isCompleted: false },
  ]);

  return (
    <div className=" text-white flex w-screen h-screen bg-gray-800 p-10" >
      <Create todos={todos} setTodos={settodos} />
      <Read todos={todos} setTodos={settodos} />
    </div>
  );
};

export default App;
