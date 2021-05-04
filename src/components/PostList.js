import React, {Component} from 'react'
import axios from 'axios'

class PostList extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            errorMessage:""
        }
    }

    componentDidMount(){
        axios.get('https://hephaestus-backendv1.herokuapp.com/posts')
            .then(response => {
                console.log(response)
                this.setState({posts:response.data})
            })
            .catch(error=>{
                console.log(error)
                this.setState({errorMessage:"We got a problem"})
            })
    }

    render() {
        return (
            <div>
                List of Posts
                {
                    this.state.posts.length ? this.state.posts.map(
                        post=>
                            <div key={post.id}>
                                <p>Blog ID: {post.id}</p>
                                <p>Title: {post.title}</p>
                                <p>Body: {post.body}</p>
                                <p>By: {post.author}</p>
                            </div>):
                        null
                }
            </div>
        )
    }
}

export default PostList