import sidebar from './sidebar.css';
import image from '../../images/image-1.jpeg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>About Me</span>
        <img src={image} alt='' />
        <p>
          I am a junior developer specialised in frontend and backend
          development for complex scalable web apps focus on writing clean,
          elegant and efficient code.
        </p>
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
            <FaFacebookSquare className='sidebarIcon' />
            <FaTwitter className='sidebarIcon' />
            <FaLinkedinIn className='sidebarIcon' />
            <FaStackOverflow className='sidebarIcon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
