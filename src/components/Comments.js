import axios from 'axios'
import React from 'react';
import {Component} from "react";
import Button from 'react-bootstrap/Button';
import {ButtonGroup, Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state={
            comments:[],
            errorMessage:""
        }
    }

    componentDidMount(){
        const address='https://hephaestus-backendv1.herokuapp.com/comments/bypost/'+this.props.value;
        axios.get(address)
            .then(response => {
                console.log(response)
                this.setState({comments:response.data})
            })
            .catch(error=>{
                console.log(error)
                this.setState({errorMessage:"We got a problem"})
            })
    }

    render() {
        return (
            <Card>
                {
                    this.state.comments.length ? this.state.comments.map(
                        comment=>
                            <Card.Body className="comDisplay" key={comment.id}>
                                <Card.Subtitle>Comment ID: {comment.id}</Card.Subtitle>
                                <Card.Title>Body: {comment.body}</Card.Title>
                                <Card.Subtitle>By: {comment.author}</Card.Subtitle>
                            </Card.Body>):
                        null
                }
            </Card>
        )
    }
}

export default Comments;