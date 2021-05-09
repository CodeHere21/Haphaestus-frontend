import axios from "axios";
import React, { useState, useEffect } from 'react'

class TagCloud extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            tags:[],
            errorMessage:""
        }
    }
    componentDidMount() {
        axios.get('https://hephaestus-backendv1.herokuapp.com/tags')
            .then(response => {
                console.log(response)
                this.setState({tags:response.data})
            })
            .catch(error=>{
                console.log(error)
                this.setState({errorMessage:"We got a problem"})
            })
    }
    render() {
        return (
            <div className="right">
                <h4>TAG CLOUD</h4>
                {
                    this.state.tags.length ? this.state.tags.map(
                        tag=>
                            <a  key={tag.id}>{tag.label}       #</a>):
                        <div><h3>Tags not found!</h3></div>
                }
            </div>
        )
    }
}

export default TagCloud;