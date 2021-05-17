import {Form} from "react-bootstrap";
import axios from 'axios'
import React, {useState} from 'react';
import Button from "react-bootstrap/Button";


function CommentBox (props){
    const [author, setAuthor] = useState(),
        [body, setBody] = useState(),

        [r, setR ] = useState(),
        authorHandler = e => setAuthor(e.target.value),
        bodyHandler = e => setBody(e.target.value)


    const onFormSubmit = e => {
        e.preventDefault();
        const num=parseInt(props.toPost, 10)
        const myDate = new Date().toISOString().slice(0, 10).replace('T', ' ');
        const postInfo = {body: body, author: author,  writtenOn: myDate, postId:num};
        axios.post('https://hephaestus-backendv1.herokuapp.com/comments/', postInfo)
            .then(response => {
                console.log(response)
                setR(response.data)
            })
            .catch(err=>{console.log(err)})

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

