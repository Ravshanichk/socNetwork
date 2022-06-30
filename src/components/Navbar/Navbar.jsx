import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  let navInfo = [
    { route: "profile", name: "Profile" },
    { route: "dialogs", name: "Dialogs" },
    { route: "news", name: "News" },
    { route: "music", name: "Music" },
    { route: "settings", name: "Settings" },
    { route: "users", name: "Users" },
  ];
  
  return (
    <nav className={s.navbar}>
      <ul>
        {navInfo.map((item) => {
          return (
            <li>
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
