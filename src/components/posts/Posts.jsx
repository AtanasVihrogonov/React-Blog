import React,{useContext} from 'react';
import Post from '../post/Post';
import './posts.css';
import { ThemeContext } from '../../context';


const Posts = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className='posts'
      style={{
        backgroundColor: darkMode ? '#777' : '#eee',
        color: darkMode && '#ddd',
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
