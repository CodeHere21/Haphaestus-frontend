import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PostList from "./components/PostList";
import Comments from "./components/Comments";
import Navigation from "./Navigation"
import {BrowserRouter as Router, Route} from "react-router-dom";
import CreateNewPost from "./components/CreateNewPost"


ReactDOM.render(
  <Router>
      <Navigation/>
      <br/>
          <Route path={"/"} exact component={PostList}/>
          <Route path={"/newpost"} exact  component={CreateNewPost}/>
          <Route path={"/showpost/:id"} exact children={<Comments />}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
