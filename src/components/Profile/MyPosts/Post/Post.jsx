import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.top}>
      <img
        className={s.avatar}
        src="https://pic.onlinewebfonts.com/svg/img_173956.png"
        alt="postAvatar"/>
        <div className={s.postText}>
          {props.message}
        </div>
      
      </div>
      <div className={s.likeArea}>
        <img
          className={s.likePic}
          src="https://www.pinclipart.com/picdir/big/87-877828_save-the-heart-by-ofirma85-instagram-like-icon.png"
          alt="like"
        ></img>
        <div style={{margin:"0 5px"}}>{props.likeCount}</div>
      </div>
    </div>
  );
};
export default Post;
