import './header.css';
import image from '../images/image-3.jpg';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src={image} alt='' />
    </div>
  );
};

export default Header;
