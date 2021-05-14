import {Form} from "react-bootstrap";
import axios from 'axios'
import React, {useState} from 'react';
import Button from "react-bootstrap/Button";


function CommentBox (props){
    const address='https://hephaestus-backendv1.herokuapp.com/comments/'+props.toPost;
    const [author, setAuthor] = useState(),
     [body, setBody] = useState(),
        authorHandler = e => setAuthor(e.target.value),
        bodyHandler = e => setBody(e.target.value)

        const onFormSubmit = e => {
        const myDate = new Date();
        const postInfo = {body: body, author: author,  writtenOn: myDate, postId:props.toPost};
        axios.post(address, postInfo)
            .then()
        e.preventDefault();
    }

        return (
            <Form className="form-inline" onSubmit={onFormSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text"  onChange={authorHandler} placeholder="Name goes here" />
                    <Form.Text>What do you want us to call you?</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicComment">
                    <Form.Label>Enter Comment</Form.Label>
                    <Form.Control type="text" onChange={bodyHandler} placeholder="Text goes here" />
                    <Form.Text>What do you wanna say?</Form.Text>

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )

}

export default CommentBox;