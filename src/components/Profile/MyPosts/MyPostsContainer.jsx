import React from "react";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
  let addPost = () => {
    props.store.dispatch(addPostAC());
  };
  let onChangeTextArea = (text) => {
    props.store.dispatch(updateNewPostTextAC(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      onChangeTextArea={onChangeTextArea}
      posts={state.posts}
      textArea={state.textArea}
      placeHolder={state.placeHolder}
    />
  );
};

export default MyPostsContainer;
