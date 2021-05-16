import React, {useState, useEffect, Component} from 'react'
import {ButtonGroup, Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


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
    </Container>)}

}
export default CreateNewPost;