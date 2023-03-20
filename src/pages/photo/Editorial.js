import React from 'react';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar';
import ModularPhoto from './ModularPhoto';
import { sparkImages, sparkMagPicsCarousel, getHeight, getWidth } from './images.js';
import '../pages.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageGallery from 'react-image-gallery';
import 'react-lazy-load-image-component/src/effects/opacity.css';

// TODO: lazy load 
export default function Editorial() {
  return (
    <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"EDITORIAL"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"EDITORIAL"} mobile={true} /></MediaQuery>
      <div className="page appear gallery">
        <div className="section-title">Editorial Work</div>
        <div className="section-subtitle">work produced for Spark Magazine</div>
        <div className="section-year">2019</div>
          <ImageGallery 
          items={sparkMagPicsCarousel}
          showThumbnails={false}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          showPlayButton={false}
          />
        <ModularPhoto img={sparkImages[0]} width={2000} padding={true} align={"center"} numColumns={1} />
        <ModularPhoto img={sparkImages[1]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[2]} width={1000} padding={false} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[3]} width={1000} padding={true} align={"center"} numColumns={1} />
        <ModularPhoto img={sparkImages[4]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[5]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[6]} width={1000} padding={false} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[7]} width={1000} padding={false} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[8]} width={600} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[9]} width={600} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[10]} width={1000} padding={false} align={"center"} numColumns={3} />
        <ModularPhoto img={sparkImages[11]} width={1000} padding={false} align={"center"} numColumns={3} />
        <ModularPhoto img={sparkImages[12]} width={1000} padding={false} align={"center"} numColumns={3} />
        <ModularPhoto img={sparkImages[13]} width={500} padding={true} align={"left"} numColumns={1} />
        <ModularPhoto img={sparkImages[14]} width={1000} padding={true} align={"center"} numColumns={1} />
        <ModularPhoto img={sparkImages[15]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[16]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[17]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[18]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[19]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[20]} width={2000} padding={true} align={"center"} numColumns={1} />
        <ModularPhoto img={sparkImages[21]} width={1000} padding={true} align={"center"} numColumns={2} />
        <ModularPhoto img={sparkImages[22]} width={1000} padding={true} align={"center"} numColumns={2} />
      </div>
    </div>
  )
};