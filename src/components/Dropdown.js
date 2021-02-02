import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  
  const [dropdownclick, setClick] = useState(false);

  const handleClick = () => setClick(!dropdownclick);

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
                onClick={handleClick}
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

export default Dropdown;