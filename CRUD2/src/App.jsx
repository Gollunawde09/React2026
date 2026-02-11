// import { useState } from "react"

// const App = ( ) => {
//   const [todos, settodos] = useState ([
//     { id :1, title: "Kamm krle bhai", isComplated: false },
//   ]);

//   const [title, settitle] = useState("");
//   const [completed, setcompleted] = useState(false);
//   const [gender, setgender] = useState("male");
//   const [city, setcity] = useState("Delhi")

//   return (
//     <div>
//       <h1>Create Tasks</h1>
//       <form >
//         <input
//         onChange={(e) => settitle(e.target.value)}
//         type="text"
//         placeholder="title" />
//         <br />
//         <br />

        
//         <input  
//         checked={completed} // props react // html atribute 
//         onChange={(e) => setcompleted(e.target.checked)} // props react // html atribute 
//         type="checkbox"/> Completed 
//         <br />
//         <br />

        
//         <input  
//          onChange={(e) => 
//           console.log(e.target.value)}
//           checked={gender == "male" && true}
//           type="radio"  
//           value="male"
//         /> male 


//         <input  
//          onChange={(e) => 
//           console.log(e.target.value)}
//           checked={gender == "female" && true}
//           type="radio"  
//           value="female"
//         /> female
//         <br />
//         <br />

//         City :
//         <select onChange={(e) => setcity(e.target.value)}>
//        <option value="Delhi">Delhi</option>
//        <option value="Mumbai">Mumbai</option>
//        <option value="kolkata">Kolkata</option>          
//         </select><br />
//         <button> Create Todo</button>
//       </form>
//     </div>
//   );
// };

// export default App;
/////////////////////////////////////////////////////////////

import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Kamm krle bhai", isCompleted: false },
  ]);

  return (
    <div>
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
