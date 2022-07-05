import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setSearchInputAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowAC,
} from "../../redux/userReducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log("mountBeforeAxios");
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`
      )
      .then((response) => {
        let users = response.data.items;
        this.props.setUsers(users);
        this.props.setTotalUsersCount(response.data.totalCount);
        debugger;
      });
    console.log("mountAfterAxios");
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        let users = response.data.items;
        this.props.setUsers(users);
        debugger;
      });
  };

  onSearchHandler = (text) => {
   
    this.props.setSearchInput(text);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?term=${this.props.usersPage.searchInputText}`
      )
      .then((response) => {
        let users = response.data.items;
        this.props.setUsers(users);
      });
  };

  render() {
    return (
      <Users
        usersPage={this.props.usersPage}
        followUser={this.props.followUser}
        unFollowUser={this.props.unFollowUser}
        onPageChanged={this.onPageChanged}
        onSearchHandler={this.onSearchHandler}
      ></Users>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {
      dispatch(followAC(userId));
    },
    unFollowUser: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUsersCount: (totalUsers) => {
      dispatch(setTotalUsersCountAC(totalUsers));
    },
    setSearchInput: (text) => {
      dispatch(setSearchInputAC(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
