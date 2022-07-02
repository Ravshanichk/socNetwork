import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogUser.module.css";

const DialogUser = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialogUser}>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : null)}
        to={path}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogUser;
