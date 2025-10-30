
import React from 'react';
import WebNavbar from '../Components/WebNavbar'
import HeroSection from '../Components/HomePage/HeroSection';
import HomeAbout from '../Components/HomePage/HomeAbout';
import MouseTrail from '../Components/MouseTrail';
import WhatweDo from '../Components/HomePage/WhatweDo';
function Home() {
  return (
    <div>
      <MouseTrail/>
      <WebNavbar/>
      <HeroSection/>
      <HomeAbout/>
      <WhatweDo/>
    </div>
  );
}

export default Home;
