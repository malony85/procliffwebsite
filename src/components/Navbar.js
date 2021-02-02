import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import './Dropdown.css';
import logo from '../images/Logo.jpg';
import { MenuItems } from './MenuItems';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

   const onMouseEnter = () => {
   /* if (window.innerWidth < 60) {
      setDropdown(false);
    } else {*/
      setDropdown(true);
    /*}*/
  };

  const onMouseLeave = () => {
    /*if (window.innerWidth < 60) {
      setDropdown(false);
    } else {*/
      setDropdown(false);
    /*}*/
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="Logo"/> 
        </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}>
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
            <li className='nav-item'>
              <Link
                to='/whyUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Why Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            
          </ul>
        </div>
      </nav>
    </>
  );

  function Dropdown() {
  
    const [dropdownclick, setClick] = useState(false);
  
    const handleClick = () => {setClick(!dropdownclick)};
  
    return (
      <>
        <ul
          onClick={handleClick}
          className={dropdownclick ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={dropdownclick ? 'dropdown-link clicked' : 'dropdown-link '}
                  to={item.path}
                  onClick={closeMobileMenu}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Navbar;
