import React from 'react';
import sidebar from './sidebar.css';
import image from '../../images/image-1.jpeg';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarContainer'>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>About Me</span>
          <img src={image} alt='' />
          <p>
            I am a junior developer specialised in frontend and backend
            development for complex scalable web apps focus on writing clean,
            elegant and efficient code.
          </p>
        </div>

        <div className='sidebarItem'>
          <span className='sidebarTitle'>Categories</span>
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
          <span className='sidebarTitle'>Follow Me</span>
          <div className='sidebarSocial'>
            <FaGithub
              className='sidebarIcon sidebarGithub'
              onClick={() =>
                window.open(
                  'https://github.com/AtanasVihrogonov://www.facebook.com',
                  '_blank'
                )
              }
            />
            <FaTwitter
              className='sidebarIcon sidebarTwitter'
              onClick={() =>
                window.open(
                  'https://https://twitter.com/TheAV_001.google.com',
                  '_blank'
                )
              }
            />
            <FaLinkedinIn
              className='sidebarIcon sidebarLinkedin'
              onClick={() =>
                window.open(
                  'https://https://www.linkedin.com/in/atanasvihrogonov/.google.com',
                  '_blank'
                )
              }
            />
            <FaStackOverflow
              className='sidebarIcon sidebarStackOverflow'
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
