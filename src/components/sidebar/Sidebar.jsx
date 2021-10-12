import React, { useContext } from 'react';
import sidebar from './sidebar.css';
import image from '../../images/image-1.jpeg';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { ThemeContext } from '../../context';

const Sidebar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className='sidebar'
      style={{
        backgroundColor: darkMode ? '#777' : '#eee',
        color: darkMode && '#ddd',
      }}
    >
      <div className='sidebarContainer'>
        <div className='sidebarItem'>
          <span
            className='sidebarTitle'
            style={{
              color: darkMode && '#ddd',
            }}
          >
            About Me
          </span>
          <img src={image} alt='' />
          <p
            style={{
              color: darkMode && '#ddd',
            }}
          >
            I am a junior developer specialised in frontend and backend
            development for complex scalable web apps focus on writing clean,
            elegant and efficient code.
          </p>
        </div>

        <div className='sidebarItem'>
          <span
            className='sidebarTitle'
            style={{
              color: darkMode && '#ddd',
            }}
          >
            Categories
          </span>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>ReactJS</li>
            <li className='sidebarListItem'>Node.js</li>
            <li className='sidebarListItem'>JavaScript</li>
            <li className='sidebarListItem'>Database</li>
            <li className='sidebarListItem'>UI/UX</li>
            <li className='sidebarListItem'>Tech Stack</li>
          </ul>
        </div>

        <div className='sidebarItem'>
          <span
            className='sidebarTitle'
            style={{
              color: darkMode && '#ddd',
            }}
          >
            Follow Me
          </span>
          <div className='sidebarSocial'>
            <FaGithub
              className='sidebarIcon sidebarGithub'
              style={{
                color: darkMode && '#ddd',
              }}
              onClick={() =>
                window.open(
                  'https://github.com/AtanasVihrogonov://www.facebook.com',
                  '_blank'
                )
              }
            />
            <FaTwitter
              className='sidebarIcon sidebarTwitter'
              style={{
                color: darkMode && '#ddd',
              }}
              onClick={() =>
                window.open(
                  'https://https://twitter.com/TheAV_001.google.com',
                  '_blank'
                )
              }
            />
            <FaLinkedinIn
              className='sidebarIcon sidebarLinkedin'
              style={{
                color: darkMode && '#ddd',
              }}
              onClick={() =>
                window.open(
                  'https://https://www.linkedin.com/in/atanasvihrogonov/.google.com',
                  '_blank'
                )
              }
            />
            <FaStackOverflow
              className='sidebarIcon sidebarStackOverflow'
              style={{
                color: darkMode && '#ddd',
              }}
              onClick={() =>
                window.open(
                  'https://stackoverflow.com/users/8870964/atanas-vihrogonov',
                  '_blank'
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
