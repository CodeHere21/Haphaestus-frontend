import axios from "axios";
import React from 'react'


class TagCloud extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            tags:[],
            errorMessage:""
        }
    }
    componentDidMount() {
        axios.get('https://hephaestus-backendv1.herokuapp.com/tags/tagcloud')
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
                        (tag, i)=>
                            <button onClick={(e)=>this.props.filter(tag)} key={i}>#{tag}</button>):
                        <div><h3>Tags not found!</h3></div>
                }
            </div>
        )
    }
}

export default TagCloud;