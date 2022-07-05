import React from 'react'
import preloader from '../../../assets/Spinner-2.gif'
import s from './Preloader.module.css'

const Preloader = ()=>{
    return(
        <div className={s.fetching}>
            <img src={preloader} alt="fetch"/>
        </div>
    )
}

export default Preloader