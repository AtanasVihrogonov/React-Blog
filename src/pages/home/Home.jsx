import React, {useContext} from 'react';
import home from './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import { ThemeContext } from '../../context';


const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <Header />
      <div
        className='home'
        style={{
          backgroundColor: darkMode ? '#888' : '#f6f6f6',
          color: darkMode && '#ddd',
        }}
      >
        <div className='homeContainer'>
          <Posts />
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
