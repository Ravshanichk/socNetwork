import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  let navInfo = [
    { route: "profile", name: "Profile", id:1 },
    { route: "dialogs", name: "Dialogs", id:2 },
    { route: "news", name: "News", id:3 },
    { route: "music", name: "Music", id:4 },
    { route: "settings", name: "Settings", id:5 },
    { route: "users", name: "Users" , id:6},
  ];
  
  return (
    <nav className={s.navbar}>
      <ul>
        {navInfo.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={"/" + item.route}
                className={({ isActive }) => (isActive ? s.active : null)}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      
    </nav>
  );
};

export default Navbar;
