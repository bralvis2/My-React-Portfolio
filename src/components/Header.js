import React from 'react';
import Nav from './Nav';
import logo from '../images/logo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <img src={logo} alt='logo' width={'350px'} />
      <div className='navbar'>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
