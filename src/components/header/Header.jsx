import React, {useContext} from 'react';
import './header.css';
// import image from '../images/image-4.jpg';
import Video from '../../videos/mobile.mp4';
import { ThemeContext } from '../../context';

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className='header'
      style={{
        backgroundColor: darkMode ? '#888' : '#eee',
        color: darkMode && '#ddd',
      }}
    >
      <div className='headerContainer'>
        <div className='headerTitles'>
          <span className='headerTitleSm'>
            React <span>&</span> Node
          </span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        {/* <img className='headerImg' src={image} alt='' /> */}
        <video
          className='headerImg'
          autoPlay
          loop
          muted
          src={Video}
          type='video/mp4'
        />
      </div>
    </div>
  );
};

export default Header;
