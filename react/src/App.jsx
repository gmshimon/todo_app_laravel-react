/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import { Button, Card } from "react-bootstrap";
import Todo from "./Components/Todo";
import FormTodo from "./Components/FormTodo";

function App() {
    const [todos, setTodos] = useState([]);
    
    // this function is used to add new todo items
    const addTodo = text =>{
      const newTodoObj = {text: text,isDone:0};
      const newTodos = [...todos, newTodoObj];
      setTodos(newTodos);
    }

    //this function is used to complete a todo
    const markTodo = index =>{
      console.log("index: ",index);
      const newTodos = [...todos,];
      newTodos[index].isDone = true;
      setTodos(newTodos);
    }

    // this function is used to delete a todo
    const removeTodo = index =>{
      const newTodos = [...todos];
      newTodos.splice(index,1);
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
          <FormTodo addTodo={addTodo} />
            {todos.map((todo,index) => (
                // eslint-disable-next-line react/jsx-key
                <Card className="mb-2">
                <Card.Body>
                  <Todo key={todo.id}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
        </div>
        </div>
    );
}

export default App;
