import React from 'react';
import './HomePage.scss';
import LeftBar from '../../Components/Home/LeftBar/LeftBar';
import RightBar from '../../Components/Home/RightBar/RightBar';
import CenterBox from '../../Components/Home/CenterBox/CenterBox';

function HomePage() {

  return (
    <div className="home-page">
      <LeftBar />
      <CenterBox />
      <RightBar />
    </div>
  )
}

export default HomePage