import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PostList from "./components/PostList";
import Navigation from "./Navigation"
import CommentBox from "./components/CommentBox"


ReactDOM.render(
  <React.StrictMode>
      <Navigation/>
      <br/>
      <PostList/>
      <CommentBox/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
