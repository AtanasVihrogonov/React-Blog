import './topbar.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import image from '../../images/image-1.jpeg';

const TopBar = () => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <FaFacebookSquare className='topIcon' />
        <FaTwitter className='topIcon' />
        <FaLinkedinIn className='topIcon' />
        <FaStackOverflow className='topIcon' />
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>Logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img className='topImg' src={image} alt='' />
        <FaSearch className='topSearchIcon' />
      </div>
    </div>
  );
};

export default TopBar;
