import React, { useRef } from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import { addPostAC, onCHangeTextAreaPostAC } from "../../../redux/state";

const MyPosts = (props) => {

  let newPostElement = useRef();
 
  let addPost = () =>{
    props.dispatch(addPostAC())
  }

  let onChangeTextArea = () =>{
    debugger
    let text = newPostElement.current.value;
    props.dispatch(onCHangeTextAreaPostAC(text));
  }

  return (
    <div className={s.myPosts}>
      <div>
        <textarea ref={newPostElement} value={props.profilePage.textArea} placeholder={props.profilePage.placeHolder} onChange={onChangeTextArea} ></textarea>
      </div>
      <div>
        <button onClick={addPost} >Add post</button>
      </div>
      MY POSTS
      {props.profilePage.posts.map(item =>{
        return(
          <Post message={item.message} likeCount={item.likeCount}></Post>
        )
      })}
    </div>
  );
};

export default MyPosts;
