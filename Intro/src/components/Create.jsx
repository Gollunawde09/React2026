import { useState } from "react";

const Create = (props) => {
    console.log(props);
  const [fullname, setfullname] = useState("");
  const [age, setAge] = useState(18);

  
  const SubmitHandler = (e) => {
    e.preventDefault();

    const newuser = { fullname, age };
    console.log(newuser); // api - backend - database
  };  // set the user in the setusers 

  return (
    <div>
      <h1>Register User</h1>

      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => setfullname(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Create;
