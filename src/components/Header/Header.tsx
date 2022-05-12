import React, { VFC } from 'react';
import "./Header.css";
import {useState,useEffect} from 'react';
import {FiSun,FiMoon} from 'react-icons/fi'
const Header:VFC = () => {
  return (
    <header className="header">
      <div className="header__row">
      <h1>CrewNew Task</h1>
      </div>
    </header>
  )
};

export default Header;
