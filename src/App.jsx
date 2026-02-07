
// const App = () => {
//   let n = 12; // number 
//   let s =" Gabbar Nawde";
//   let b = true; // boolean
//   let nu = null;// boolean 
//   let un = undefined; // boolean 
//   let arr = [<h1>Hey</h1>, 12, "hello", true, null, undefined, "hii"];

//   let obj = { name: "john", age: 89  };

//   return (
//     <div>
//       <h1>Datatypes</h1>
//       <h2> Number: {n}</h2>
//       <h2> String: {s} </h2>
//       <h2> boolean: {b ? " hello " : "Not Hello"}</h2>
//       <h2> Null : {nu}</h2>
//       <h2> undefined: {un} </h2>
//       <h2> Array: {arr} </h2>

//       <h2> Object: {obj.name}  || {obj.age} </h2>

//     </div>
//   )
// }

// export default App;

//////////////////////////////////////////////////////////////////

// const App = () => {
//   const profiles = [
//      {name: "Gollu", age: 12},
//      {name: "Gabbar", age: 54},
//      {name: "JD", age: 18},
//   ];  // used of the dynamic data rendering

// const updateProfiles = profiles.map((profile,index) => {
  
//   return ( 
//     <li key={index}>
//     <span>Name: {profile.name}</span>
//     <small>Age: {profile.age} </small>
//     </li>
//   );
// });

// return (
//   <div>
//     <h1>Rendering Json</h1>
//     <ol>{updateProfiles}</ol>
//   </div>
// );

// };

// export default App;

////////////////////////////////////////////////////////////

// import { useState } from "react"; 

// const App = () => {
//   const [username, setUsername] = useState("Gabbar");

//   const ChangeHandler = () => {
//     setUsername("Gollu");
//   };
 
//   console.log(username);

//   return (
//     <div>
//       <h1>Username</h1>
//       <h2>{username}</h2>
//       <button onClick={ChangeHandler}>Change Name</button>
//     </div>
//   );
// };

// export default App;


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//next lecture Day 75 Two-way Binding, Props Drilling& Styling In React


// import { useState } from " react";

// const App = () => {
//   const [users, setusers] useState([
//     { name: "john", age: 12 },
//     { name: "Ankur", age: 32 },
//     { name: "Gollu", age: 22},
//   ]);

//   const renderuser = users.map((user, index) => {
//     return <li key={index}>{user.name}</li>
//   });

//   return (
//     <div>
//       <h1>User Data</h1>
//       <ol>{renderuser}</ol>
//     </div>
//   );
// };

// export default App;

///////////////////////////

///////////////////////////////////////////////////////////////

// import { useState } from "react";
// import Create from "./components/Create";

// const App = () => {

//   const [users, setusers] = useState([
//     { name: "John", age: 12 },
//     { name: "Gabbar", age: 32 },
//     { name: "Gollu", age: 22 },
//   ]);

//   const renderuser = users.map((user, index) => {
//     return <li key={index}>{user.name}</li>;
//   });

//   const [fullname, setfullname] = useState("");
//   const [age, setage] = useState(18);

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     const newuser = { name: fullname, age };
//     console.log(newuser); // api / backend / database
//   };

//   return (
//     <div>
//       <h1>Register User</h1>

//       <form onSubmit={SubmitHandler}>
//         <input
//           onChange={(e) => setfullname(e.target.value)}
//           value={fullname}
//           type="text"
//           placeholder="Full Name"
//         />

//         <input
//           onChange={(e) => setage(e.target.value)}
//           value={age}
//           type="number"
//           placeholder="Age"
//         />

//         <button type="submit">Submit</button>
//       </form>

//       <hr />

//       <h1>User Data</h1>
//       <ul>{renderuser}</ul>
//     </div>
//   );
// };

// export default App;
/////////////////////

// import { useState } from "react";

// const App = () => {
//   const [users, setusers] = useState([
//     { name: "Golu", age: 12 },
//     { name: "Gollu", age: 43 },
//     { name: "Gabbar", age: 33 },
//   ]);

//   const renderUsers = users.map((user, index) => {
//     return <li key={index}>{user.name}</li>;
//   });

//   const [fullname, setfullname] = useState("");
//   const [age, setage] = useState("18");

//   const SubmitHandler = (e) => {
//     e.preventDefault();
//     const newuser = { fullname, age};
//     console.log(newuser);  //api -backend -database
//   };
  

//   return (
//     <div>
//       <h1>Register User</h1>
//       <form >
//         <input 
//         onChang={(e) => setfullname(e.target.value)}
//         value={fullname}
//         type="text" 
//          placeholder="Full Name"/>
         
//         <input 
//         onChange={(e) => setage(e.target.value)}
//         value={age}
//         type="number" 
//         placeholder="Age"/>
//         <button>Submit</button>
//         <h1>__________________________________________</h1>
//       </form>
//       <h1>User Data</h1>
//       <ol>{renderUsers}</ol>
//     </div>
//   );
// };

// export default App;  


///////////////////////////////////////////////////////////////////////////




import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setusers] = useState([
 { name: "Gollu", age: "34"},
 { name: "Gabbar", age: "32"},
 { name: "JD", age: "22"},
  ]) ;

  
  return (
    <div>
      <Create />
      <Read  users={users} setusers={setusers} />
      {/* Read(users, setusers) */}
    </div>
  );
};

export default App;``