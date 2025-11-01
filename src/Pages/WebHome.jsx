
import React from 'react';
import WebNavbar from '../Components/WebNavbar'
import HeroSection from '../Components/HomePage/HeroSection';
import HomeAbout from '../Components/HomePage/HomeAbout';
import MouseTrail from '../Components/MouseTrail';
import WhatweDo from '../Components/HomePage/WhatweDo';
import OurTeam from '../Components/HomePage/OurTeam';
function Home() {
  return (
    <div className='w-full'>
      <MouseTrail/>
      <WebNavbar/>
      <HeroSection/>
      <HomeAbout/>
      <WhatweDo/>
      <OurTeam/>
    </div>
  );
}

export default Home;
