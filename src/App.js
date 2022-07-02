import React from "react";
import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";

const App = (props) => {


  return (
    <div className={s.wrapper}>
      <Header />
      <Navbar />
      <div className={s.content}>
        <Routes>
          <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
          <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
