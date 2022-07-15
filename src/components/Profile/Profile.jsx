import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'


const Profile = (props) =>{
    return(
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer></MyPostsContainer>
        </div>
    )
}

export default Profile