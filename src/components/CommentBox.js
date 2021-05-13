import {Form} from "react-bootstrap";
import axios from 'axios'
import React from 'react';
import Button from "react-bootstrap/Button";


class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {comments: [], errorMessage:"" };
    }

    componentDidMount() {
        const address='https://hephaestus-backendv1.herokuapp.com/posts/{id}'+this.props.value;
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

    render (){
        return (

            <Form className="form-inline">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control type="userName" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicComment">

                    <br/>
                    <Form.Control type="comment" placeholder="Please say something..." />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        )
    }

}
export default CommentBox;



// return (
//     <div id="add-comment-form">
//         <h3>Add a Comment</h3>
//         <label>
//             Name:
//             <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
//         </label>
//         <label>
//             Comment:
//             <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
//         </label>
//         <button onClick={() => addComment()}>Add Comment</button>
//     </div>
// );