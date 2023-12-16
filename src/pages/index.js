import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomeImage from '../components/HomeImage';

const Home = () => {
  useEffect(() => {
    document.body.classList.add('noScroll');
    return () => {
      document.body.classList.remove('noScroll');
    };
  }, []);

  return (
    <div>
      <Navbar />
      <HomeImage />
    </div>
  );
};

export default Home;
