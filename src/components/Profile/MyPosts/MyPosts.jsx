import React, { useRef } from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {

  let newPostElement = useRef();
 
  let addPost = () =>{
    props.dispatch({type:"ADD-POST"})
  }

  let onChangeTextArea = () =>{
    let text = newPostElement.current.value;
    props.dispatch({type:"ON-CHANGE-TEXT-AREA-POST", body: text});
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
