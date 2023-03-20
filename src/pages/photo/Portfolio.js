import React from 'react';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar';
import ModularPhoto from './ModularPhoto';
import { portfolioImages } from './images.js';
import '../pages.scss';

// TODO: do i want to add a description or something?
export default function Portfolio() {
  return (
    <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"PORTFOLIO"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"PORTFOLIO"} mobile={true} /></MediaQuery>
      <div className="page appear gallery">
        <div className="section-title">Photography Portfolio</div>
        {/* <div className="section-subtitle">subtitle goes here</div> */}
        {/* <div className="section-year">2018 - 2019</div> */}
        <ModularPhoto img={portfolioImages[0]} width={1000} padding={false} align={"right"} numColumns={1} />
        <ModularPhoto img={portfolioImages[1]} width={700} padding={true} align={"center"} numColumns={1} />
        <ModularPhoto img={portfolioImages[2]} width={600} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={portfolioImages[3]} width={600} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={portfolioImages[4]} width={800} padding={true} align={"right"} numColumns={1} />
        <ModularPhoto img={portfolioImages[5]} width={2000} padding={false} align={"center"} numColumns={1} />
        <ModularPhoto img={portfolioImages[6]} width={600} padding={false} align={"center"} numColumns={2} />
        <ModularPhoto img={portfolioImages[7]} width={600} padding={false} align={"center"} numColumns={2} />
        <ModularPhoto img={portfolioImages[8]} width={600} padding={true} align={"left"} numColumns={1} />
        <ModularPhoto img={portfolioImages[9]} width={1200} padding={true} align={"right"} numColumns={1} />
        <ModularPhoto img={portfolioImages[10]} width={800} padding={true} align={"left"} numColumns={1} />
        <ModularPhoto img={portfolioImages[11]} width={2000} padding={true} align={"center"} numColumns={1} />
        <ModularPhoto img={portfolioImages[12]} width={2000} padding={true} align={"center"} numColumns={1} />
        <ModularPhoto img={portfolioImages[13]} width={700} padding={true} align={"left"} numColumns={1} />
        <ModularPhoto img={portfolioImages[14]} width={600} padding={true} align={"left"} numColumns={1} />
        <ModularPhoto img={portfolioImages[15]} width={600} padding={true} align={"left"} numColumns={2} />
        <ModularPhoto img={portfolioImages[16]} width={500} padding={true} align={"left"} numColumns={2} />
        <ModularPhoto img={portfolioImages[17]} width={1000} padding={true} align={"left"} numColumns={1} />
        <ModularPhoto img={portfolioImages[18]} width={600} padding={true} align={"left"} numColumns={2} />
        <ModularPhoto img={portfolioImages[19]} width={600} padding={true} align={"left"} numColumns={2} />
      </div>
    </div>
  )
};