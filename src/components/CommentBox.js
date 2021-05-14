import {Form} from "react-bootstrap";
import axios from 'axios'
import Button from "react-bootstrap/Button";


function CommentBox (props){
    const address='https://hephaestus-backendv1.herokuapp.com/comments/'+props.toPost;

    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)
    }

        return (
            <Form className="form-inline" onSubmit={onFormSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text"   placeholder="Name goes here" />
                    <Form.Text>What do you want us to call you?</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicComment">
                    <Form.Label>Enter Comment</Form.Label>
                    <Form.Control type="text"  placeholder="Text goes here" />
                    <Form.Text>What do you wanna say?</Form.Text>

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )

}

export default CommentBox;