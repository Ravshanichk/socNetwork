import React, { useRef } from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {

  let postList = props.posts.map(item => {return <Post message={item.message} likeCount={item.likeCount}></Post>})

  let newPostElement = useRef();
 
  let onAddPost = () =>{
    props.addPost()
  }
  let onChangeTextArea = () =>{
    debugger
    let text = newPostElement.current.value
    props.onChangeTextArea(text);
  }

  return (
    <div className={s.myPosts}>
      <div>
        <textarea ref={newPostElement} value={props.textArea} placeholder={props.placeHolder} onChange={onChangeTextArea} ></textarea>
      </div>
      <div>
        <button onClick={onAddPost} >Add post</button>
      </div>
      MY POSTS
        {postList}
    </div>
  );
};

export default MyPosts;
