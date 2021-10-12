import React, { useContext } from 'react';
import './post.css';
import image from '../../images/image-2.jpg';
import { ThemeContext } from '../../context';

const Post = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='post'>
      <img className='postImg' src={image} alt='' />

      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'> React /</span>
          <span className='postCat'> Node</span>
        </div>
        <span className='postTitle'>Lorem ipsum, dolor sit amet consec.</span>
        <hr></hr>
        <span
          className='postDate'
          style={{
            color: darkMode && '#aaa',
          }}
        >
          1 hour ago
        </span>
      </div>

      <div
        className='postDesc'
        style={{
          color: darkMode && '#ddd',
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, beatae
        praesentium officia nulla, commodi quam dignissimos aspernatur minima
        ratione unde ipsum incidunt aliquam vel exercitationem. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Quo nulla amet itaque nisi
        voluptas ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos saepe expedita tenetur aliquid quam iste illum
        necessitatibus porro nemo quasi.
      </div>
    </div>
  );
};

export default Post;
