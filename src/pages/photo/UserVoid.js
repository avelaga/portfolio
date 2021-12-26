import React , { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar'
import { userVoidImages, getHeight, getWidth } from './images.js';
import '../pages.css';
import Columned from "react-columned";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function UserVoid() {
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
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"USERVOID"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"USERVOID"} mobile={true} /></MediaQuery>
      <div className="page">
        <div className="appear">
          <MediaQuery minDeviceWidth={500}>{mapImages(3, userVoidImages)}</MediaQuery>
          <MediaQuery maxDeviceWidth={500}>{mapImages(1, userVoidImages)}</MediaQuery>
          {isOpen && (
            <Lightbox
              mainSrc={userVoidImages[photoIndex]}
              nextSrc={userVoidImages[(photoIndex + 1) % userVoidImages.length]}
              prevSrc={userVoidImages[(photoIndex + userVoidImages.length - 1) % userVoidImages.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + userVoidImages.length - 1) % userVoidImages.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % userVoidImages.length)
              }
            />
          )}
        </div>
      </div>
    </div>
  )
};