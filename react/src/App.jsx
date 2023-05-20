/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import { Button, Card } from "react-bootstrap";
import Todo from "./Components/Todo";
import FormTodo from "./Components/FormTodo";
import updateTodoApiCall from "./hooks/updateTodoApiCall";

function App() {
    const [todos, setTodos] = useState([]);
    
    // this function is used to add new todo items
    const addTodo = item =>{
      // call the api to add todo items in the database
      fetch('http://127.0.0.1:8000/api/addtodo',{
            method: 'POST',
            body: JSON.stringify(item),
            headers:{
                'Accept':'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    //this function is used to complete a todo
    const markTodo = index =>{
      console.log("index: ",index);
      const newTodos = [...todos,];
      newTodos[index].isDone = 1;
      updateTodoApiCall(newTodos[index]) // make a hook component to update the todo item. Since same code is needed in Todo.jsx file
    }

    // this function is used to delete a todo
    const removeTodo = id =>{
      //call the api to delete the todo from the database
      fetch (`http://127.0.0.1:8000/api/deleteTodo/${id}`)
      .then(res=>res.json())
      .then(data=>{
        if(data){
          window.alert(`${data?.text} has been successfully deleted`);
        }
      })
    }

    const editTodo = index =>{
      const filterTodo = todos.filter(todo =>todo.id == index+1)
      console.log(index,filterTodo);
    }
    //fetch the data
    useEffect(() => {
        fetch("http://127.0.0.1:8000/getTodo")
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, [todos]);
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
                  editTodo={editTodo}
                  />
                </Card.Body>
              </Card>
            ))}
        </div>
        </div>
    );
}

export default App;
