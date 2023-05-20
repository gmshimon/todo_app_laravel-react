/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FormTodo = ({ addTodo }) => {
    const [text, setText] = useState("");
    const [user,setUser] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        const newTodo = {
            text: text,
            user: user,
            isDone:0
        }
        addTodo(newTodo);
        setText(text);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>
                    <b>Add Todo</b>
                </Form.Label>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Todo Text</Form.Label>
                        <Form.Control
                            type="text"
                            className="input"
                            defaultValue={user}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Add new todo"
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Assign User</Form.Label>
                        <Form.Control
                            type="text"
                            className="input"
                            defaultValue={text}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Add new todo"
                        />
                    </Form.Group>
                </Row>
            </Form.Group>
            <Button variant="primary my-3" type="submit">
                Add
            </Button>
        </Form>
    );
};

export default FormTodo;
