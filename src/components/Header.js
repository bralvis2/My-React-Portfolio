import React from "react";
import '../styles/Header.css'
import logo from '../images/logo.png'

function Header() {
  return (
    <header>
      <img src={logo} alt='logo'width={'350px'}/>
    </header>
  );
}

export default Header;
