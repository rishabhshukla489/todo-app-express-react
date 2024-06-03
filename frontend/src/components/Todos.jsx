import { useState } from "react"

export function Todos({ todos }) {
    const [completed, setCompleted]= useState()
    return (
      <div>
        {todos.map((todo) => (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick={()=>{
                setCompleted(true);
            fetch("http://localhost:3000/completed",{
                method: "PUT",
                body: JSON.stringify({
                    id: todo._id
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })}} >{todo.completed === true ? "Completed" : "Mark as completed"}</button>
          </div>
        ))}
      </div>
    );
  }
  