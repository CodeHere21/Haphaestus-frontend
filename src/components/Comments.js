import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {Container, Col, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Comments(){
    let {id}=useParams();
    const [comments, setComments,]=useState([])
    const [post, setPost,]=useState([])
    useEffect(() => {
        axios.get(`https://hephaestus-backendv1.herokuapp.com/comments/bypost/${id}`)
            .then(response => {
                console.log(response)
                setComments(response.data)
            }).catch(err=>{console.log(err)})
        axios.get(`https://hephaestus-backendv1.herokuapp.com/posts/${id}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            }).catch(err=>{console.log(err)})
    })

    return(
        <Container>
            <Row>
            <Card>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle>{post.author}</Card.Subtitle>
                <Card.Body>{post.body}</Card.Body>
            </Card>
                <Row>
                    <br/><br/>
                </Row>
            </Row>
                <Row>
                <Col md={{ span: 6, offset: 3 }}>
        <Card>
            {
                comments.map(
                    comment=>
                        <Card.Body className="comDisplay" key={comment.id}>
                            <Card.Subtitle>Body: {comment.body}</Card.Subtitle>
                            <Card.Subtitle>By: {comment.author}</Card.Subtitle>
                        </Card.Body>)
            }
        </Card></Col></Row>
        </Container>
    )

    }

export default Comments;