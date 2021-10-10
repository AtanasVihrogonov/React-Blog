import './about.css';
import image from '../../images/best-me.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='aboutContainer'>
        <h1>About Page</h1>
        <h3>Sorry, this page isn't available.</h3>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default About;
