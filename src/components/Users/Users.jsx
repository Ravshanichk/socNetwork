import React from "react";
import { useRef } from "react";
import Preloader from "../common/Preloader/Preloader";
import User from "./User/User";
import s from "./Users.module.css";

const Users=(props)=> {

  let pagesCount = Math.ceil(
    props.usersPage.totalUsersCount / props.usersPage.pageSize
  );
  let currentPage = props.usersPage.currentPage;
  let pages = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  let usersList = props.usersPage.users.map((user) => {
    return (
      <User
        follow={props.followUser}
        unFollow={props.unFollowUser}
        user={user}
      />
    );
  });

  let searchText = useRef();

  let onSearchHandler=()=>{
    let text = searchText.current.value;
    props.onSearchHandler(text);
  }
  let onPageChanged =(page)=>{
      props.onPageChanged(page)
      

  }

    return (
      <div className={s.usersBlock}>
        {props.usersPage.isFetching?<Preloader></Preloader>:
        <div><div className={s.pageBlock}>
        {pages.map((page) => (
          <span
            className={currentPage === page ? s.selectedPage : s.page}
            onClick={() => {
              onPageChanged(page);
            }}
          >
            {page}
          </span>
        ))}
      </div>
      <div className={s.searchBlock}>
        <input
          ref={searchText}
          value={props.usersPage.searchInputText}
          placeholder="Search users by name"
          onChange={() => {
            onSearchHandler();
          }}
        ></input>
      </div>
      <div className={s.userList}>{usersList}</div>
          </div>}
        
      </div>
    );
  
}

export default Users;
