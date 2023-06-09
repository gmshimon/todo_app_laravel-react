/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import TodoModal from "./TodoModal";
import updateTodoApiCall from "../hooks/updateTodoApiCall";

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
    const updateTodo = (obj) => {
        console.log(obj);
        updateTodoApiCall(obj);
    };

    return (
        <div className="todo">
            <span>
                <span
                    style={{
                        textDecoration: todo?.isDone ? "line-through" : "",
                    }}
                >
                    <p>{todo.text}</p>
                </span>
                <p>Assigned to: {todo.user}</p>
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
            <TodoModal
                todo={todo}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                updateTodo={updateTodo}
            />
        </div>
    );
};

export default Todo;
