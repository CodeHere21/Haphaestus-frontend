import React, { useState, useEffect } from 'react'
import axios from 'axios'


function TagList(props){
    const tagAddress='https://hephaestus-backendv1.herokuapp.com/tags/bypost/'+props.value;
    const [tags, setTags]=useState([])
    useEffect(() => {
        axios.get(tagAddress)
        .then(response => {
            console.log(response)
            setTags(response.data)
        }).catch(err=>{console.log(err)})
    })
    return(
        <p>TAGS:
        {tags.map((tag, i)=>(
            <a key={i}> {tag.label}, </a>
        ))
    }   </p>)
}

class PostList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            errorMessage:"",
            display:[],
            step:0
        }
        this.fwdClick=this.fwdClick.bind(this);
        this.prevClick=this.prevClick.bind(this);
    }
    componentDidMount(){
        axios.get('https://hephaestus-backendv1.herokuapp.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts:response.data.reverse(), display:response.data.slice(0,5)})
            })
            .catch(error=>{
                console.log(error)
                this.setState({errorMessage:"We got a problem"})
            })
    }
    fwdClick(){
        const newStep=  this.state.step<this.state.posts.length?this.state.step+5:this.state.step
        this.setState({step: newStep, display:this.state.posts.slice(newStep, newStep+5)})
    }
    prevClick(){
        const newStep=  this.state.step>0?this.state.step-5:0
        this.setState({step: newStep, display:this.state.posts.slice(newStep, newStep+5)})
    }
    render() {
        return (
            <div className="left">
                {
                    this.state.display.length ? this.state.display.map(
                        post=>
                            <div className="display" key={post.id}>
                                <p>Blog ID: {post.id}</p>
                                <p>Title: {post.title}</p>
                                <p>By: {post.author}</p>
                                <TagList value={post.id}/>
                            </div>):
                        <div><h3>End of Archives!</h3></div>
                }
                <div><button onClick={this.prevClick}>Previous 5 Entries</button><button onClick={this.fwdClick}>Next 5 Entries</button></div>
            </div>
        )
    }
}

export default PostList;
