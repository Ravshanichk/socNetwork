import React from "react";
import s from './Message.module.css'

const Message =(props) =>{
    return(
        <div className={s.message}>{props.message.text}</div>
    )
}

export default Message