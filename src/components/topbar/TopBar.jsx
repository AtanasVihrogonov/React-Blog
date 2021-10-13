import React, { useState, useContext } from 'react';
import './topbar.css';
import { FaSearch } from 'react-icons/fa';
import { FaAlignLeft } from 'react-icons/fa';
import image from '../../images/image-1.jpeg';
import { Link as LinkR } from 'react-router-dom';
import Toggle from '../toggle/Toggle';
import { ThemeContext } from '../../context';

const TopBar = () => {
  const user = false;

  return (
    <div className='top'>
      <div className='topContainer'>
        <div className='menu'>
          <FaAlignLeft className='menu-icon' />
        </div>
        <div className='topLogo'>
          <span>
            <a href='https://avihrogonov.co.uk'>A\V</a>
          </span>
        </div>
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <LinkR className='link' to='/'>
                Home
              </LinkR>
            </li>
            <li className='topListItem'>
              <LinkR className='link' to='/about'>
                About
              </LinkR>
            </li>
            <li className='topListItem'>
              <LinkR className='link' to='/projects'>
                Projects
              </LinkR>
            </li>
            <li className='topListItem'>
              <LinkR className='link' to='/write'>
                Write
              </LinkR>
            </li>
            <li className='topListItem'>{user && 'Logout'}</li>
          </ul>
        </div>
        <div className='topRight'>
          {user ? (
            ((<img className='topImg' src={image} alt='' />))
          ) : (
            <ul className='topList'>
              <FaSearch className='topSearchIcon' />
              <li className='topListItem'>
                <LinkR className='link linkReg' to='/register'>
                  Register
                </LinkR>
              </li>
              <li className='topListRegister'>
                <LinkR className='link linkLg' to='/login'>
                  Log in
                </LinkR>
              </li>
            </ul>
          )}
          <Toggle className='toggle' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
