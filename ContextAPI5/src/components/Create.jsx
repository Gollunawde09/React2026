import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast  } from "react-toastify";
import { todocontext } from "../Wrapper";

const Create = () => {
  const [todos, settodos] = useContext(todocontext);
  
  
    const { 
        register,
        handleSubmit,
        reset, 
        formState: { errors }, 
      } = useForm() ;

    const SubmitHandler = (data) => {
        data.isCompleted = false;
        data.id = nanoid();

        
        const copytodos = [...todos];
        copytodos.push(data);
        settodos(copytodos);

        toast.success("Todo created!");


        reset();
  };

console.log(errors.title.message);
  return (
  <div className=" w[60%] p-10">
    
        <h1 className="mb-10 text-5xl text-thin">Set<span className="text-red-400"> Reminders</span>
           for  <br />tasks</h1>

      <form  onSubmit={handleSubmit(SubmitHandler)}>
        <input
        {...register("title",{
          required: "title can not be empty",
        })}
        className="p-2 border-b w-full text-2xl font-thin outine-0"
        type="text"
        placeholder="title" />
        <br /><br />

       <small className=""> {errors?.title?.message}</small>

        {/* { errors && errors.title && errors.title.message &&<small>
          {errors.title.message} </small> } */}

        <button className="mt-5 text-xl px-10 py-2 border rounded"> Create Todo</button>
      </form>

  </div>
  )
}

export default Create