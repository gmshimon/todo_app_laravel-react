/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import { Button, Card } from "react-bootstrap";
import Todo from "./Components/Todo";

function App() {
    const [todos, setTodos] = useState([]);

    //this function is used to complete a todo
    const markTodo = index =>{
      const newTodos = [...todos,];
      newTodos[index].isDone = true;
      setTodos(newTodos);
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/getTodo")
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

    console.log(todos);

    return (
        <div className="app">
          <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
            {todos.map((todo,index) => (
                // eslint-disable-next-line react/jsx-key
                <Card>
                <Card.Body>
                  <Todo key={todo.id}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  // removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
        </div>
        </div>
    );
}

export default App;
