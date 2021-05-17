import {Form} from "react-bootstrap";
import axios from 'axios'
import React from 'react';
import Button from "react-bootstrap/Button";


class CommentBox extends React.Component {


    constructor(props) {
        super(props);
        this.state = {comments: [], errorMessage:"" };
        this.handleAuthorChange = this.handleChange.bind(this, 'author');
        this.handleCommentChange = this.handleChange.bind(this, 'comment');
    }

    handleChange(keyName, event) {
        this.setState({[keyName]: event.target.value});
    }

    componentDidMount() {
        const address='https://hephaestus-backendv1.herokuapp.com/posts/'+this.props.value;
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

    handleSubmit(event) {
        const commentInfo = {author: this.state.author, comment: this.comment.body};
        axios.post('https://hephaestus-backendv1.herokuapp.com/posts/{id}', commentInfo)
            .then(response => this.setState({
                comment: response.data.comment,
                author: response.data.author
            }));
    }

    render (){
        return (

            <Form className="form-inline" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="userName" placeholder="Enter name" onChange={this.handleAuthorChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicComment">
                    <br/>
                    <Form.Control type="comment" placeholder="Please say something..." onChange={this.handleCommentChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }

}
export default CommentBox;


