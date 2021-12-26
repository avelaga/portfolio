import React , { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar';
import { miamiImages, getHeight, getWidth } from './images.js';
import Columned from "react-columned";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import '../pages.css';

export default function Miami() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const mapImages = function(cols, images) {
    return <Columned columns={cols} className="gallery">
      {images.map((value, index) => {
        return <LazyLoadImage key={index} className="img" src={value} onClick={() => {setIsOpen(true); setPhotoIndex(index)}} effect="opacity" height={getHeight(value)} width={getWidth(value)} />
      })}
    </Columned>
  };

  return (
    <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MIAMI"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MIAMI"} mobile={true} /></MediaQuery>
      <div className="page">
        <div className="appear">
          <MediaQuery minDeviceWidth={500}>{mapImages(3, miamiImages)}</MediaQuery>
          <MediaQuery maxDeviceWidth={500}>{mapImages(1, miamiImages)}</MediaQuery>
          {isOpen && (
            <Lightbox
              mainSrc={miamiImages[photoIndex]}
              nextSrc={miamiImages[(photoIndex + 1) % miamiImages.length]}
              prevSrc={miamiImages[(photoIndex + miamiImages.length - 1) % miamiImages.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + miamiImages.length - 1) % miamiImages.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % miamiImages.length)
              }
            />
          )}
        </div>
      </div>
    </div>
  )
};