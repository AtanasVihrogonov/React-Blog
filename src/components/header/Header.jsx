import './header.css';
// import image from '../images/image-4.jpg';
import Video from '../../videos/video-1.mp4';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
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
  );
};

export default Header;
