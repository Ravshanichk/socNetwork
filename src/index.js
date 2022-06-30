import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree =(state)=>{
    
     root.render(
  <BrowserRouter>
    <App state = {store.getState()} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} onChangeTextArea={store.onChangeTextArea.bind(store)}/>
  </BrowserRouter>
);
}

renderEntireTree()

store.subscribe(renderEntireTree)

