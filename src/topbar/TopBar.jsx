import './topbar.css';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import image from '../images/image-1.jpg';

const TopBar = () => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <FaFacebookSquare className='topIcon' />
        <FaTwitter className='topIcon' />
        <FaPinterestP className='topIcon' />
        <FaInstagram className='topIcon' />
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
