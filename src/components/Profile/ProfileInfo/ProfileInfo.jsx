import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ava from '../../../assets/user_ava.png'



const ProfileInfo = (props) =>{

    if(!props.profile){
        return <Preloader></Preloader>
    }else{
    return(
        <div className={s.profileInfo}>
            <div>
                <img src={props.profile.photos.large?props.profile.photos.large:ava} alt='ava'></img>
            </div>
            <ul>
                <li>
                   Full name: {props.profile.fullName}
                </li>
                <li>
                   Status: {props.profile.aboutMe}
                </li>
                <li>
                facebook: {props.profile.contacts.facebook}
                </li>
                <li>
                </li>
            </ul>
        </div>
    )
    }
}

export default ProfileInfo