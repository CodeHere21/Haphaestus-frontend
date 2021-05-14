import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TagCloud from "./TagCloud";
import Button from 'react-bootstrap/Button';
import {ButtonGroup, Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";

//component displays the list of tags each blog post has attached
function TagList(props){
    const tagAddress='https://hephaestus-backendv1.herokuapp.com/tags/bypost/'+props.value;
    const [tags, setTags]=useState([])
    useEffect(() => {
        axios.get(tagAddress)
        .then(response => {
            setTags(response.data)
        }).catch(err=>{console.log(err)})
    })
    return(
        <p>TAGS:
        {tags.map((tag, i)=>(
            <Button  size={'sm'} variant={'link'} key={i}> {tag.label}, </Button>
        ))
    }   </p>)
}

function PostNav(props){
return( <Container>
    <ButtonGroup className="centered">
        <Button variant="secondary" onClick={props.prev}>Previous 5 Entries</Button><Button variant="primary" onClick={props.hom}>Refresh</Button><Button variant="secondary" onClick={props.fwd}>Next 5 Entries</Button>
    </ButtonGroup>
        {props.showList.length ? props.showList.map(
            post=> <Card  key={post.id}>
                <Card.Body>
                <Card.Title>Title: {post.title}</Card.Title>
                <Card.Subtitle>{post.body.slice(0,100)}...</Card.Subtitle>
                    <br/>
                <Card.Subtitle>By: {post.author}</Card.Subtitle>
                    <br/>
                <Link to={`/${post.id}`}>Read More</Link>
                <TagList value={post.id}/>
                </Card.Body>
            </Card>
        ):<Card><Card.Title>End of Archives!</Card.Title></Card>}
        <ButtonGroup className="centered">
    <Button variant="secondary" onClick={props.prev}>Previous 5 Entries</Button><Button variant="primary" onClick={props.hom}>Refresh</Button><Button variant="secondary" onClick={props.fwd}>Next 5 Entries</Button>
        </ButtonGroup>
        </Container>)
    }

class PostList extends React.Component {
          constructor(props) {
          super(props)
          this.state = {
              posts: [],
              errorMessage: "",
              display: [],
              step: 0
          }
          this.fwdClick = this.fwdClick.bind(this);
          this.prevClick = this.prevClick.bind(this);
          this.tagClick = this.tagClick.bind(this);
          this.homeClick = this.homeClick.bind(this);
          this.bodyClick = this.bodyClick.bind(this);
          }

          componentDidMount() {
                axios.get('https://hephaestus-backendv1.herokuapp.com/posts')
                .then(response => {
                this.setState({posts: response.data.reverse(), display: response.data.slice(0, 5)})
                })
                .catch(error => {
                console.log(error)
                this.setState({errorMessage: "We got a problem"})
                })
                }

          fwdClick() {
                const newStep = this.state.step < this.state.posts.length ? this.state.step + 5 : this.state.step
                this.setState({step: newStep, display: this.state.posts.slice(newStep, newStep + 5)})
                }

          prevClick() {
              const newStep = this.state.step > 0 ? this.state.step - 5 : 0
              this.setState({step: newStep, display: this.state.posts.slice(newStep, newStep + 5)})
                }

          tagClick(i) {
              const filter = 'https://hephaestus-backendv1.herokuapp.com/posts/bytag/' + i;
              axios.get(filter)
                  .then(response => {
                    this.setState({isHidden:false, step: 0, display: response.data})
                })
                    .catch(error => {
                    console.log(error)
                    this.setState({errorMessage: "We got a problem"})
                    })
          }
          homeClick() {
              this.setState({isHidden:false, step: 0, display: this.state.posts.slice(0, 5)})
          }

          bodyClick() {

          }

          render(){
                    return (<Container>
                        <Row>
                        <Col xs={6}>
                        <PostNav showList={this.state.display} prev={this.prevClick}
                                 hom={this.homeClick} fwd={this.fwdClick} gone={this.bodyClick}/>
                            </Col>
                        <Col><TagCloud filter={this.tagClick}/></Col>
                        </Row>
                    </Container>)
                }
}

export default PostList;

