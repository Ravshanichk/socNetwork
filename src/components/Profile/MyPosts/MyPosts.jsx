import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"

const MyPosts = (props) => {


  return (
    <div className={s.myPosts}>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
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
