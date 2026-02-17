'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import ModularPhoto from '../components/ModularPhoto';
import { portfolioImages } from '../data/images.js';

export default function Portfolio() {
  return (
    <div className="page">
      <Navbar activeLink={"PORTFOLIO"} />
      <h1 className="title">Photography Portfolio</h1>
      <div className="section-subtitle">selected works</div>
      <div className="section-year">2018 - 2020</div>
      <div className="photo-mobile-spacer" />
      <ModularPhoto img={portfolioImages[0]} alt="lord's boxing gym" width={1000} padding={false} align={"right"} numColumns={1} />
      <ModularPhoto img={portfolioImages[1]} alt="spark magazine shoot" width={700} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={portfolioImages[2]} alt="user void main photo" width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={portfolioImages[3]} alt="spark shoot 2" width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={portfolioImages[4]} alt="apple visitor center" width={800} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={portfolioImages[5]} alt="portait" width={2000} padding={false} align={"center"} numColumns={1} />
      <ModularPhoto img={portfolioImages[6]} alt="user void 2" width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={portfolioImages[7]} alt="spark magazine shoot 2" width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={portfolioImages[8]} alt="miami vice cocaine dream" width={600} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[9]} alt="deyoung museum" width={1200} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={portfolioImages[10]} alt="pebble beach" width={800} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[11]} alt="miami vice cocaine dream 2" width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={portfolioImages[12]} alt="portrait 2" width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={portfolioImages[13]} alt="self portrait" width={700} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[14]} alt="photo of house at night" width={600} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[15]} alt="spark magazine shoot 3" width={600} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto img={portfolioImages[16]} alt="miata vice cocaine dream 3" width={500} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto img={portfolioImages[17]} alt="portrait of grandfather" width={1000} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={portfolioImages[18]} alt="portrait 3" width={600} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto img={portfolioImages[19]} alt="portrait 4" width={600} padding={true} align={"left"} numColumns={2} />
    </div>
  );
}
