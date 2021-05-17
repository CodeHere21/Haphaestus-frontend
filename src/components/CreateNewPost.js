import React, {useState, useEffect, Component} from 'react'
import {ButtonGroup, Container, Form} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


class CreateNewPost extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            newPost:[]
        }
    }

    render(){return(<Container>
        <Card>
            <Card.Body>
                <Card.Title>WORK IN PROGRESS</Card.Title>
            </Card.Body>
        </Card>
        <Card>
        <Form className="form-inline">
            <Form.Group controlId="postAuthor">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control type="text" placeholder="Name goes here" />
            </Form.Group>

            <Form.Group controlId="postTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title goes here" />
            </Form.Group>
            <Form.Group controlId="postBody">
                <Form.Label>Body</Form.Label>
                <Form.Control type="text"  placeholder="Body goes here" />
            </Form.Group>

            <Form.Group controlId="tagsList">
                <Form.Label>tags</Form.Label>
                <Form.Control type="text" placeholder="put all tags here" />
            </Form.Group>




            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Card>
    </Container>)}

}
export default CreateNewPost;