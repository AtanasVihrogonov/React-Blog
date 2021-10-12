import React from 'react';
import './toggle.css';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

const Toggle = () => {
  return (
    <div className='toggle'>
      <div className='toggleContainer'>
        <FaMoon className='toggle-icon' />
        <FaSun className='toggle-icon sun' />
        <button className='toggle-button'></button>
      </div>
    </div>
  );
};

export default Toggle;
