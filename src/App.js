import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroContent from './components/Home/HeroContent';

const App = () => {
  return (
    <div className='font-serif'>
      <Navbar />
      <HeroContent />
    </div>
  );
};

export default App;