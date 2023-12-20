import React from 'react';
import logo from '../../assets/logo.svg';
import './NavBar.styles.css';
import hamburger from '../../assets/hamburger.svg';

const NavBar = () => {

    return (
      <header className='pt-4'>
          <nav className='navbar d-flex align-items-center justify-content-between'>
              <ul className='navbar__left d-flex align-items-center'>
                  <li><button>Menu</button></li>
                  <li><img src={hamburger} alt="hamburger"/></li>
              </ul>
              <img src={logo} alt='company-logo'/>
              <ul className='navbar__right d-flex align-items-center'>
                  <li><button>Log In</button></li>
                  <li><button>Sign Up</button></li>
              </ul>
          </nav>
      </header>
    )
}

export default NavBar;
