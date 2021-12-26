import React , { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../../layout/Navbar';
import { publishedImages, sparkPublications, miamiPublications, allPublications, getHeight, getWidth } from './images.js';
import '../pages.css';
import Columned from "react-columned";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

export default function Published() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const mapImages = function(cols, images, id) {
    let precedingNum;
    switch (id){
      case 1:
        precedingNum = 0;
        break;
      case 2:
        precedingNum = publishedImages.length;
        break;
      case 3:
        precedingNum = publishedImages.length + sparkPublications.length;
        break;
      default:
        console.log("gallery id out of range.")
    }

    return <Columned columns={cols} className="gallery">
      {images.map((value, index) => {
        return <LazyLoadImage key={index} className="img" src={value} onClick={() => {setIsOpen(true); setPhotoIndex(index + precedingNum);}} effect="opacity" height={getHeight(value)} width={getWidth(value)} />
      })}
    </Columned>
  }

  return (
    <div>
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"PUBLISHED"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"PUBLISHED"} mobile={true} /></MediaQuery>
      <div className="page">
        <div className="appear">
          <MediaQuery minDeviceWidth={500}>
          {mapImages(3, sparkPublications, 2)}
            {mapImages(2, miamiPublications, 3)}
            {mapImages(3, publishedImages, 1)}
            {/* {mapImages(3, sparkPublications, 2)}
            {mapImages(2, miamiPublications, 3)} */}
          </MediaQuery>

          <MediaQuery maxDeviceWidth={500}>
            {mapImages(1, publishedImages, 1)}
            {mapImages(1, sparkPublications, 2)}
            {mapImages(1, miamiPublications, 3)}
          </MediaQuery>

          {isOpen && (
            <Lightbox
              mainSrc={allPublications[photoIndex]}
              nextSrc={allPublications[(photoIndex + 1) % allPublications.length]}
              prevSrc={allPublications[(photoIndex + allPublications.length - 1) % allPublications.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + allPublications.length - 1) % allPublications.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % allPublications.length)
              }
            />
          )}
        </div>
      </div>
    </div>
  )
};