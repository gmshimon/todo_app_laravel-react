/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const Todo = ({ todo, index, markTodo, removeTodo }) => {
    console.log(todo);
    return (
        <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo?.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
    );
};

export default Todo;