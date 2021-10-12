import React from 'react';
import './topbar.css';
import { FaSearch } from 'react-icons/fa';
import { RiMenu2Fill } from 'react-icons/ri';
import image from '../../images/register.jpg';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { MenuItems } from './MenuItems';
import Toggle from '../toggle/Toggle';

const TopBar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topContainer'>
        <div className='mobileMenuIcon'>
          <RiMenu2Fill className='mobileIcon' />
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
            <img className='topImg' src={image} alt='' />
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
