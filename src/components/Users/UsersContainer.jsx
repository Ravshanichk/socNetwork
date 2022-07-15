import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import {
  followUser,
  setCurrentPage,
  setFetching,
  setSearchInput,
  setTotalUsersCount,
  setUsers,
  toggleFollowingProgress,
  unFollowUser,
} from "../../redux/userReducer";
import Users from "./Users";
import { followApi, getUsers, searchUsers, unFollowApi } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log("mountBeforeAxios");
    this.props.setFetching(true);
    getUsers(this.props.usersPage.pageSize, this.props.usersPage.currentPage).then((response) => {
        let users = response.items;
        this.props.setUsers(users);
        this.props.setTotalUsersCount(response.totalCount);
        this.props.setFetching(false)
      });
    console.log("mountAfterAxios");
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    // this.props.setFetching(true);
    getUsers(this.props.usersPage.pageSize, pageNumber).then(response=>{
      let users = response.items;
      this.props.setUsers(users);
    })
   
  };

  onSearchHandler = (text) => {
   
    this.props.setSearchInput(text);
    searchUsers(this.props.usersPage.searchInputText).then(response=>{
      let users = response.items;
      this.props.setUsers(users);
    })
  };

  onClickUnFollow =(id) => {
    this.props.toggleFollowingProgress(true, id)
    unFollowApi(id).then((response) => {
        this.props.unFollowUser(id)
        this.props.toggleFollowingProgress(false, id)
      
    });
  }

  onClickFollow =(id) => {
    this.props.toggleFollowingProgress(true, id)
   followApi(id).then((response) => {
        this.props.followUser(id)
        this.props.toggleFollowingProgress(false, id)
    });
  }

  render() {
    return (
      <Users
        usersPage={this.props.usersPage}
        onClickFollow={this.onClickFollow}
        onClickUnFollow={this.onClickUnFollow}
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

// let mapDispatchToProps = (dispatch) => {
  // return {
  //   followUser: (userId) => {
  //     dispatch(follow(userId));
  //   },
  //   unFollowUser: (userId) => {
  //     dispatch(unFollow(userId));
  //   },
  //   setUsers: (users) => {
  //     dispatch(setUsers(users));
  //   },
  //   setCurrentPage: (page) => {
  //     dispatch(setCurrentPage(page));
  //   },
  //   setTotalUsersCount: (totalUsers) => {
  //     dispatch(setTotalUsersCount(totalUsers));
  //   },
  //   setSearchInput: (text) => {
  //     dispatch(setSearchInput(text));
  //   },
  //   setFetching: (fetching) => {
  //     dispatch(setFetching(fetching));
  //   },
  // };
// };


export default connect(mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage ,
  setTotalUsersCount,
  setSearchInput,
  setFetching,
  toggleFollowingProgress
  },
)(UsersContainer);
