import axios from 'axios'
import {Component} from "react";


class Comments extends Component{
    constructor(props){
        super(props)
        this.state={
            comments:[],
            errorMessage:""
        }
    }

    componentDidMount(){
        axios.get('https://hephaestus-backendv1.herokuapp.com/comments')
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
            <div className="com">
                {
                    this.state.comments.length ? this.state.comments.map(
                        comment=>
                            <div className="comDisplay" key={comment.id}>
                                <p>Comment ID: {comment.id}</p>
                                <p>Body: {comment.body}</p>
                                <p>By: {comment.author}</p>
                                {/*<p>Blog ID: {post.id}</p>*/}
                            </div>):
                        null
                }
            </div>
        )
    }
}

export default Comments