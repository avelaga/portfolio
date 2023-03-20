import React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../../layout/Navbar';
import ModularPhoto from './ModularPhoto';
import { miamiImages, miamiBookPicsCarousel } from './images.js';
import ImageGallery from 'react-image-gallery';
import '../pages.scss';

// TODO: lazy load, add artist statement? 
export default function Miami() {
  return (
    <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MIAMI"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MIAMI"} mobile={true} /></MediaQuery>
      <div className="page appear gallery">
        <div className="section-title">Miami Vice Cocaine Dream</div>
        {/* <div className="section-subtitle">subtitle goes here</div> */}
        <div className="section-year">2018 - 2019</div>
        <ImageGallery
          items={miamiBookPicsCarousel}
          showThumbnails={false}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          showPlayButton={false}
        />
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
    </div>
  )
};