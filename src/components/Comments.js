import axios from 'axios'
import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import {useParams} from "react-router-dom";

function Comments(){
    let {id}=useParams();
    const [comments, setComments]=useState([])
    useEffect(() => {
        axios.get(`https://hephaestus-backendv1.herokuapp.com/comments/bypost/${id}`)
            .then(response => {
                console.log(response)
                setComments(response.data)
            }).catch(err=>{console.log(err)})
    })

    return(
        <Card>
            {
                comments.map(
                    comment=>
                        <Card.Body className="comDisplay" key={comment.id}>
                            <Card.Subtitle>Comment ID: {comment.id}</Card.Subtitle>
                            <Card.Title>Body: {comment.body}</Card.Title>
                            <Card.Subtitle>By: {comment.author}</Card.Subtitle>
                        </Card.Body>)
            }
        </Card>
    )

    }

export default Comments;