import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <img src={require('../../images/logo.png')} alt='' className='navbar--logo'/>
        </nav>
    );
  }