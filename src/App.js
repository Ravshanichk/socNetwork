import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className={s.wrapper}>
      <HeaderContainer/>
      <Navbar />
      <div className={s.content}>
        <Routes>
          <Route path="/profile/*:userId" element={<ProfileContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
