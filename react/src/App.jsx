// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";

const todo_list = [
    {
        id: 1,
        text: "Todo-1",
        isDone: false,
    },
    {
        id: 2,
        text: "Todo-2",
        isDone: false,
    },
    {
        id: 3,
        text: "Todo-3",
        isDone: false,
    },
];

console.log(todo_list);
function App() {
    return (
        <>
            <div>
                <h1>Hello</h1>
                {todo_list.map((todo) =>  (
                    <div key={todo.id}>
                        <h1>{todo.text}</h1>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
