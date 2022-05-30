import React from 'react'
import s from "./App.module.css"
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';


const App =()=> {
  return (
    <div className={s.wrapper}>
          <Header/>
          <Navbar/>
          <div className={s.content}>
              hui
          </div>
    </div>
  );
}

export default App;
