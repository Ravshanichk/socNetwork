
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';





let renderEntireTree =(state)=>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App appState = {state} addPost={addPost}/>
  </BrowserRouter>
);
}

export default renderEntireTree
