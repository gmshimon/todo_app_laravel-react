/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const TodoModal = ({todo,show,handleShow,handleClose,updateTodo}) => {

    const [text,setText] = useState(todo.text)
    const [done,setDone] = useState(todo.isDone)
    const [userName,setUserName] = useState(todo.user);

    const handleSubmit = (e) => {
        updateTodo({id:todo.id,text:text,isDone:parseInt(done) ,user:userName})
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Todo data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridText">
                                <Form.Label>Todo Text</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Todo Text"
                                    className="input"
                                    defaultValue={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridUser">
                                <Form.Label>Assigned User</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Todo User Name"
                                    className="input"
                                    defaultValue={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue={done} onChange={(e)=>setDone(e.target.value)}>
                                    <option>0</option>
                                    <option>1</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" onClick={handleSubmit}>
                            Update
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" type="submit" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    );
};

export default TodoModal;