import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'


const Profile = (props) =>{
    return(
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}></MyPosts>
        </div>
    )
}

export default Profile