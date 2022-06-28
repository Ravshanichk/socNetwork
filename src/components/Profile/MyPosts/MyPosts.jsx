import React, { useRef } from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {

  let newPostElement = useRef();
 
  let addPost = () =>{
    let text = newPostElement.current.value;
    props.addPost(text)
    text = '';
  }

  return (
    <div className={s.myPosts}>
      <div>
        <textarea ref={newPostElement} ></textarea>
      </div>
      <div>
        <button onClick={addPost} >Add post</button>
      </div>
      MY POSTS
      {props.posts.map(item =>{
        return(
          <Post message={item.message} likeCount={item.likeCount}></Post>
        )
      })}
    </div>
  );
};

export default MyPosts;
