'use client';

import React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../../src/components/Navbar';
import ModularPhoto from '../../src/components/ModularPhoto';
import { miamiImages, miamiBookPicsCarousel } from '../../src/data/images.js';
import ImageGallery from 'react-image-gallery';

export default function Miami() {
  return (
    <div className="page">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MIAMI"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MIAMI"} mobile={true} /></MediaQuery>
      <div className="title">Miami Vice Cocaine Dream</div>
      <div className="section-year">2018 - 2019</div>
      <div className="artist-statement">
        Miami Vice Cocaine Dream explores a house alive with constant energy - a space where teenagers navigate the transition from adolescence to adulthood. By day it slumbers; by night it becomes a theater of memory, risk, and freedom, unbound by supervision or responsibility.<br /><br />
        My work documents this liminal period, capturing the artifacts and atmospheres that define it: empty bottles, posters, mismatched furniture, and makeshift objects. Through cinematic lighting, props, and occasional models, I amplify the space, creating photographs that blur documentary and imagination. Each image reflects the realities of the house while revealing the dreamlike intensity of youth lived on its own terms.
      </div>
      <div className="photo-mobile-spacer" />
      <ImageGallery
        items={miamiBookPicsCarousel}
        showThumbnails={false}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
      />
      <div className="photo-mobile-spacer" />
      <ModularPhoto img={miamiImages[0]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={miamiImages[1]} width={600} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={miamiImages[2]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={miamiImages[3]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={miamiImages[4]} width={900} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={miamiImages[5]} width={2000} padding={false} align={"center"} numColumns={1} />
      <ModularPhoto img={miamiImages[6]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[7]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[8]} width={900} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={miamiImages[9]} width={800} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={miamiImages[10]} width={800} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={miamiImages[11]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[12]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[13]} width={700} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={miamiImages[14]} width={600} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={miamiImages[15]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[16]} width={800} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[17]} width={700} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={miamiImages[18]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[19]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[20]} width={1200} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={miamiImages[21]} width={600} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto img={miamiImages[22]} width={900} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={miamiImages[23]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[24]} width={900} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[25]} width={1200} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={miamiImages[26]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[27]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[28]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={miamiImages[29]} width={600} padding={false} align={"center"} numColumns={1} />
    </div>
  );
}
