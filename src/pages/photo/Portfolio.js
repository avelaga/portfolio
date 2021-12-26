import React , { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive'
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
import { portfolioImages, getHeight, getWidth } from './images.js';
import '../pages.css';
import Columned from "react-columned";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function Portfolio() {
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
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"PORTFOLIO"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"PORTFOLIO"} mobile={true} /></MediaQuery>
      <div className="page">
        <div className="appear">
          <MediaQuery minDeviceWidth={500}>{mapImages(3, portfolioImages)}</MediaQuery>
          <MediaQuery maxDeviceWidth={500}>{mapImages(1, portfolioImages)}</MediaQuery>
          {isOpen && (
            <Lightbox
              mainSrc={portfolioImages[photoIndex]}
              nextSrc={portfolioImages[(photoIndex + 1) % portfolioImages.length]}
              prevSrc={portfolioImages[(photoIndex + portfolioImages.length - 1) % portfolioImages.length]}
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