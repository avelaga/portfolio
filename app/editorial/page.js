'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import ModularPhoto from '../components/ModularPhoto';
import { sparkImages, sparkMagPicsCarousel } from '../data/images.js';
import ImageGallery from 'react-image-gallery';

export default function Editorial() {
  return (
    <div className="page">
      <Navbar activeLink={"EDITORIAL"} />
      <h1 className="title">Editorial Work</h1>
      <div className="section-subtitle">work produced for Spark Magazine</div>
      <div className="section-year">2019</div>
      <div className="photo-mobile-spacer" />
      <ImageGallery
        items={sparkMagPicsCarousel}
        showThumbnails={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
      />
      <div className="photo-mobile-spacer" />
      <ModularPhoto alt="photo of girl sitting at couch" img={sparkImages[0]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="girl posing with colorful backdrop" img={sparkImages[1]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="girl squatting and posing" img={sparkImages[2]} width={1000} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="two models facing opposite directions with yellow light" img={sparkImages[3]} width={1000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="models interlocking arms while biting paper" img={sparkImages[4]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait portrait of model" img={sparkImages[5]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="colorful picture of model facing away" img={sparkImages[6]} width={1000} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="colorful picture of model facing doorway" img={sparkImages[7]} width={1000} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait of model looking up" img={sparkImages[8]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait of model with colorful backdrop" img={sparkImages[9]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait of model in pink light" img={sparkImages[10]} width={1000} padding={false} align={"center"} numColumns={3} />
      <ModularPhoto alt="portrait of model and red and yellow light" img={sparkImages[11]} width={1000} padding={false} align={"center"} numColumns={3} />
      <ModularPhoto alt="portrait of model with colorful backdrop" img={sparkImages[12]} width={1000} padding={false} align={"center"} numColumns={3} />
      <ModularPhoto alt="portrait of model with gothic style" img={sparkImages[13]} width={500} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto alt="portrait of model with red and yellow light 2" img={sparkImages[14]} width={1000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="portrait of model looking up at camera" img={sparkImages[15]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait of model in green light" img={sparkImages[16]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait of model pulling apart curtain" img={sparkImages[17]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait of model sitting in pink light" img={sparkImages[18]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait of model looking at reflection in mirror" img={sparkImages[19]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="2 models posing in yellow light in abandoned warehouse garage" img={sparkImages[20]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="2 models posing in red light in abandoned garage" img={sparkImages[21]} width={1000} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait of model through curtain" img={sparkImages[22]} width={1000} padding={true} align={"center"} numColumns={2} />
    </div>
  );
}
