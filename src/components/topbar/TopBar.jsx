import './topbar.css';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import image from '../../images/image-1-removebg.jpg';
import { Link } from 'react-router-dom';
import React from 'react';

const TopBar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topContainer'>
        <div className='topLogo'>
          <span><a href='#'>A\V</a></span>
        </div>
        {/* <div className='topLeft'> */}
          {/* <FaGithub
            className='topIcon'
            onClick={() =>
              window.open('https://github.com/AtanasVihrogonov', '_blank')
            }
          />
          <FaTwitter
            className='topIcon'
            onClick={() =>
              window.open('https://twitter.com/TheAV_001', '_blank')
            }
          />
          <FaLinkedinIn
            className='topIcon'
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/atanasvihrogonov',
                '_blank'
              )
            }
          />
          <FaStackOverflow
            className='topIcon'
            onClick={() =>
              window.open(
                'https://stackoverflow.com/users/8870964/atanas-vihrogonov',
                '_blank'
              )
            }
          /> */}
        {/* </div> */}
        <div className='topCenter'>
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/'>
                Home
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/about'>
                About
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/projects'>
                Projects
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/write'>
                Write
              </Link>
            </li>
            <li className='topListItem'>{user && 'Logout'}</li>
          </ul>
        </div>
        <div className='topRight'>
          {user ? (
            <img className='topImg' src={image} alt='' />
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link linkLg' to='/login'>
                  Log in
                </Link>
              </li>
              <li className='topListItem'>
                <Link className='link linkReg' to='/register'>
                  Register
                </Link>
              </li>
            </ul>
          )}
          <FaSearch className='topSearchIcon' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
