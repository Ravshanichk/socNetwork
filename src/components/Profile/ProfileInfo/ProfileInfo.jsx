import React from 'react'
import s from './ProfileInfo.module.css'



const ProfileInfo = () =>{
    return(
        <div className={s.profileInfo}>
            <div>
                <img src='https://www.paradisehotel51.com/sin/wp-content/uploads/2022/04/Hatoba.png' alt='ava'></img>
            </div>
            <ul>
                <li>
                    Name:
                </li>
                <li>
                    city:
                </li>
                <li>
                    age:
                </li>
                <li>
                    stack:
                </li>
            </ul>
        </div>
    )
}

export default ProfileInfo