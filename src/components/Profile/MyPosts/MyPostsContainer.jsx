import React from "react";
import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState().profilePage;
//   let addPost = () => {
//     props.store.dispatch(addPostAC());
//   };
//   let onChangeTextArea = (text) => {
//     props.store.dispatch(updateNewPostTextAC(text));
//   };

//   return (
//     <MyPosts
//       addPost={addPost}
//       onChangeTextArea={onChangeTextArea}
//       posts={state.posts}
//       textArea={state.textArea}
//       placeHolder={state.placeHolder}
//     />
//   );
// };

let mapStateToProps =(state) =>{
  return{
    posts: state.profilePage.posts,
    textArea: state.profilePage.textArea,
    placeHolder: state.profilePage.placeHolder
  }
}

let mapDispatchtoProps = (dispatch) => {
  return{
    addPost: ()=>{
      dispatch(addPostAC());
    },
    onChangeTextArea: (body)=>{
      dispatch(updateNewPostTextAC(body))
    }
  }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchtoProps)(MyPosts)

export default MyPostsContainer;
