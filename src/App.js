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

const App = () => {

  let posts = [
    {id:1, message: 'Sometime owls are not what they look like', likeCount:3},
    {id:2, message: 'YOU!', likeCount:0},
    {id:3, message: 'Just let it go', likeCount:1},
  ]

  let dialogItems = [
    { name: "Stein", id: 1 },
    { name: "Akira", id: 2 },
    { name: "Husein", id: 3 },
    { name: "Salt", id: 4 },
  ];

  let messages = [
    { text: "Hello", id: 1 },
    { text: "Hi!", id: 2 },
    { text: "Sometimes i wish i were a bird", id: 3 },
    { text: "My daughter is going to America", id: 4 },
    { text: "You look like previous prime minister of Japan", id: 5 },
  ];


  return (
    <div className={s.wrapper}>
      <Header />
      <Navbar />
      <div className={s.content}>
        <Routes>
          <Route path="/profile" element={<Profile posts={posts} />} />
          <Route path="/dialogs/*" element={<Dialogs dialogItems={dialogItems} messages={messages}/>} />
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
