/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import TodoModal from "./TodoModal";

// eslint-disable-next-line react/prop-types
const Todo = ({ todo, index, markTodo, removeTodo, editTodo }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //open the modal
    const editButtonTodo = () => {
        handleShow();
    };

    //update the todo
    const updateTodo = (obj)=>{
        console.log(obj)

        fetch('http://127.0.0.1:8000/api/addtodo',{
            method: 'POST',
            body: JSON.stringify(obj),
            headers:{
                'Accept':'application/json',
                'Content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

    return (
        <div className="todo">
            <span
                style={{ textDecoration: todo?.isDone ? "line-through" : "" }}
            >
                {todo.text}
            </span>
            <div>
                <Button
                    variant="outline-warning"
                    onClick={() => editButtonTodo(index)}
                >
                    Edit
                </Button>{" "}
                <Button
                    variant="outline-success"
                    onClick={() => markTodo(index)}
                >
                    ✓
                </Button>{" "}
                <Button
                    variant="outline-danger"
                    onClick={() => removeTodo(todo.id)}
                >
                    ✕
                </Button>
            </div>
            <TodoModal  todo={todo} show={show} handleClose={handleClose} handleShow={handleShow} updateTodo={updateTodo}/>
        </div>
    );
};

export default Todo;
