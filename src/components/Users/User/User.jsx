import React from "react";
import s from "./User.module.css";
import avatar from "../../../assets/user_ava.png";

const User = (props) => {
  let follow = () => {
    let id = props.user.id;
    props.follow(id);
  };

  let unFollow = () => {
    let id = props.user.id;
    props.unFollow(id);
  };

  return (
    <div className={s.userBlock} key={props.user.id}>
      <div className={s.leftSide}>
        <div className={s.avatar}>
          <img
            src={
              props.user.photos.small != null ? props.user.photos.small : avatar
            }
            alt="avatar"
          ></img>
        </div>
        <button onClick={props.user.isFollow ? unFollow : follow}>
          {props.user.isFollow ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={s.rightSide}>
        <div className={s.left}>
          <div>{props.user.name}</div>
          <div className={s.status}>{props.user.status}</div>
        </div>
        {/* <div className={s.right}>
            <div>
                {props.user.location==null?"-":props.user.location.country},
            </div>
            <div>
                {props.user.location==null?"-":props.user.location.city}
            </div>
            </div> */}
      </div>
    </div>
  );
};

export default User;
