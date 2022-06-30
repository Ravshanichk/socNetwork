import React from "react";
import s from "./Music.module.css";
import pic from "../../assets/pic.jpg";
import vinyl from "../../assets/vinyl.png"

const Music = () => {
  return (
    <div className={s.musicBlock}>
      <div style={{ display: "flex" }}>
        <div className={s.something}></div>
        <div>
          <img src={pic}></img>
        </div>
      </div>
      <div>
            <img className={s.vinyl} src={vinyl}/>
      </div>
    </div>
  );
};

export default Music;
