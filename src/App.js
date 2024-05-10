import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroContent from './components/Home/HeroContent';
import Flight from './components/Flight/Flight';

const App = () => {
  return (
    <div className='font-mono'>
      <Navbar />
      <HeroContent />
      <Flight />
    </div>
  );
};

export default App;