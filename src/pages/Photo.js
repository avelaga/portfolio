import React from "react";
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../layout/Navbar';
import { portfolioImages, miamiImages, userVoidImages, publishedImages } from './photo/images.js';
import './pages.css';

export default function Photo() {
  return <div>
    <MediaQuery minDeviceWidth={500}>
      <Navbar activeLink={"PHOTO"} mobile={false} />
    </MediaQuery>
    <MediaQuery maxDeviceWidth={500}>
      <Navbar activeLink={"PHOTO"} mobile={true} />
    </MediaQuery>

    <div className="page appear photo-flex" >
      <a href={"/portfolio"}>
        <div className="photo-menu-img" >
          <div className="center-title">PORTFOLIO</div>
          <div className="menu-fadein ">
            <img src={portfolioImages[0]} className="f1" />
            <img src={portfolioImages[1]} className="f2" />
            <img src={portfolioImages[2]} className="f3" />
            <img src={portfolioImages[3]} className="f4" />
            <img src={portfolioImages[4]} className="f5" />
            <img src={portfolioImages[5]} className="f6" />
            <img src={portfolioImages[6]} className="f7" />
            <img src={portfolioImages[7]} className="f8" />
          </div>
        </div>
      </a>

      <a href={"/miamivice"}>
        <div className="photo-menu-img" >
          <div className="center-title">
            <div>MIAMI VICE COCAINE DREAM</div>
            <div className="photo-subtitle">2018 - 2019</div>
          </div>
          <div className="menu-fadein ">
            <img src={miamiImages[0]} className="f1" />
            <img src={miamiImages[1]} className="f2" />
            <img src={miamiImages[2]} className="f3" />
            <img src={miamiImages[3]} className="f4" />
            <img src={miamiImages[4]} className="f5" />
            <img src={miamiImages[5]} className="f6" />
            <img src={miamiImages[6]} className="f7" />
            <img src={miamiImages[7]} className="f8" />
          </div>
        </div>
      </a>

      <a href={"/uservoid"}>
        <div className="photo-menu-img" >
          <div className="center-title">
            <div>USER VOID</div>
            <div className="photo-subtitle">2019 - PRESENT</div>
          </div>
          <div className="menu-fadein ">
            <img src={userVoidImages[0]} className="f1" />
            <img src={userVoidImages[1]} className="f2" />
            <img src={userVoidImages[2]} className="f3" />
            <img src={userVoidImages[3]} className="f4" />
            <img src={userVoidImages[4]} className="f5" />
            <img src={userVoidImages[5]} className="f6" />
            <img src={userVoidImages[6]} className="f7" />
            <img src={userVoidImages[7]} className="f8" />
          </div>
        </div>
      </a>

      <a href={"/published"}>
        <div className="photo-menu-img" >
          <div className="center-title">PUBLISHED WORK</div>
          <div className="menu-fadein ">
            <img src={publishedImages[0]} className="f1" />
            <img src={publishedImages[1]} className="f2" />
            <img src={publishedImages[2]} className="f3" />
            <img src={publishedImages[3]} className="f4" />
            <img src={publishedImages[4]} className="f5" />
            <img src={publishedImages[5]} className="f6" />
            <img src={publishedImages[6]} className="f7" />
            <img src={publishedImages[7]} className="f8" />
          </div>
        </div>
      </a>
    </div>
  </div>;
};