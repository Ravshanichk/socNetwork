import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.css'


const Profile = (props) =>{
    
    return(
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} onChangeTextArea={props.onChangeTextArea}></MyPosts>
        </div>
    )
}

export default Profile