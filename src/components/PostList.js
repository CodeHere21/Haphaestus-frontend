import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TagCloud from "./TagCloud";

//component displays the list of tags each blog post has attached
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

function PostNav(props){
return( <div className={"left"}>
        {props.showList.length ? props.showList.map(
            post=> <div className="display" key={post.id}>
                <p>Blog ID: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>By: {post.author}</p>
                <button onClick={props.gone}>Show Post</button>
            </div>
        ):<div><h3>End of Archives!</h3></div>}
    <button onClick={props.prev}>Previous 5 Entries</button><button onClick={props.hom}>Refresh</button><button onClick={props.fwd}>Next 5 Entries</button>
        </div>)
    }

class PostList extends React.Component {
          constructor(props) {
          super(props)
          this.state = {
          posts: [], errorMessage: "", display: [], step: 0, isHidden: false
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
                console.log(response)
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
                    console.log(response)
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
              this.setState({isHidden:true})
          }

          render(){
                    return (<div>
                        {!this.state.isHidden &&
                        <PostNav showList={this.state.display} prev={this.prevClick}
                                 hom={this.homeClick} fwd={this.fwdClick} gone={this.bodyClick}/>}
                        <TagCloud filter={this.tagClick}/>
                    </div>)
                }
}

export default PostList;

