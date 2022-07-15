import React from "react";
import s from "./User.module.css";
import avatar from "../../../assets/user_ava.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  let follow = () => {
    let id = props.user.id;
    props.onClickFollow(id)
  };

  let unFollow = () => {
    let id = props.user.id;
    props.onClickUnFollow(id);
  };

  return (
    <div className={s.userBlock} key={props.user.id}>
      <div className={s.leftSide}>
        <div className={s.avatar}>
          <NavLink
            to={"/profile/" + props.user.id}
            className={({ isActive }) => (isActive ? s.active : null)}
          >
            <img
              src={
                props.user.photos.small != null
                  ? props.user.photos.small
                  : avatar
              }
              alt="avatar"
            ></img>
          </NavLink>
        </div>
        <button disabled={props.usersPage.followingInProgress.some(id=>id === props.user.id)} onClick={props.user.followed ? unFollow : follow}>
          {props.user.followed ? "Unfollow" : "Follow"}
        </button>
      </div>
      <div className={s.rightSide}>
        <div className={s.left}>
          <div>{props.user.name}</div>
          <div className={s.status}>{props.user.status}</div>
        </div>
     
      </div>
    </div>
  );
};

export default User;
