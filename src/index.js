import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, onChangeTextArea, subscribe } from './redux/state';
import {addMessage} from './redux/state'
import state from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree =()=>{

    root.render(
  <BrowserRouter>
    <App appState = {state} addPost={addPost} addMessage={addMessage} onChangeTextArea={onChangeTextArea}/>
  </BrowserRouter>
);
}
renderEntireTree()

subscribe(renderEntireTree)

export default renderEntireTree
