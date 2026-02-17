'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import ModularPhoto from '../components/ModularPhoto';
import { miamiImages, miamiBookPicsCarousel } from '../data/images.js';
import ImageGallery from 'react-image-gallery';

export default function Miami() {
  return (
    <div className="page">
      <Navbar activeLink={"MIAMI"} />
      <h1 className="title">Miami Vice Cocaine Dream</h1>
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
      <ModularPhoto alt="bedroom" img={miamiImages[0]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="portrait" img={miamiImages[1]} width={600} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto alt="house outside" img={miamiImages[2]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="living room" img={miamiImages[3]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="kitchen" img={miamiImages[4]} width={900} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto alt="house party" img={miamiImages[5]} width={2000} padding={false} align={"center"} numColumns={1} />
      <ModularPhoto alt="portrait 2" img={miamiImages[6]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="house outside 2" img={miamiImages[7]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="morning after party" img={miamiImages[8]} width={900} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="dining room" img={miamiImages[9]} width={800} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto alt="laundry room" img={miamiImages[10]} width={800} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto alt="sink" img={miamiImages[11]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="back patio 1" img={miamiImages[12]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait 3" img={miamiImages[13]} width={700} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto alt="portrait 4" img={miamiImages[14]} width={600} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto alt="dining room 2" img={miamiImages[15]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="bedroom 2" img={miamiImages[16]} width={800} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="living room 2" img={miamiImages[17]} width={700} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto alt="bedroom 3" img={miamiImages[18]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="dining room 3" img={miamiImages[19]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait 5" img={miamiImages[20]} width={1200} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="kitchen 2" img={miamiImages[21]} width={600} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto alt="outside" img={miamiImages[22]} width={900} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto alt="portrait 5" img={miamiImages[23]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="dining room 4" img={miamiImages[24]} width={900} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="shower" img={miamiImages[25]} width={1200} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="living room 3" img={miamiImages[26]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait 6" img={miamiImages[27]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="living room 4" img={miamiImages[28]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="self portrait" img={miamiImages[29]} width={600} padding={false} align={"center"} numColumns={1} />
    </div>
  );
}
