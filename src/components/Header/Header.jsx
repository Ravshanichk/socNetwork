import React from "react";
import s from "./Header.module.css"

const Header = (props) =>{
    return(
        <header className={s.header}>
            <div>
                <img src="http://vgboxart.com/resources/logo/52_killer7-prev.png"></img>
            </div>
            <div className={s.loginButton}>
                {props.auth.isAuth?<a onClick={props.onLoginHandler}>login</a>:<div>none</div>}
            </div>
        </header>
    )
}

export default Header