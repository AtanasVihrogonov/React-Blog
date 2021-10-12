import React from 'react';
import home from './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <div className="homeContainer">
        <Posts />
        <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
