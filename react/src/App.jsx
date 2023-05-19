// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [todos,setTodos] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/getTodo')
    .then(res=>res.json())
    .then(data=>setTodos(data))
  },[])

  console.log(todos);

    return (
        <>
            <div>
                <h1>Hello</h1>
                {todos.map((todo) =>  (
                    <div key={todo.id}>
                        <h1>{todo.text}</h1>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
