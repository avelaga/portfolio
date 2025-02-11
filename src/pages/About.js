import React from "react";
import Navbar from '../layout/Navbar'
import MediaQuery from 'react-responsive'
import me1 from "../../dist/images/home/room.jpg";
import meguitar from "../../dist/images/home/guitar.jpg";
import mepurple from "../../dist/images/home/mepurple.jpg";
import mecrop from "../../dist/images/home/mecrop.jpg";
import medrums from "../../dist/images/home/medrums.jpg";
import resume from "../../dist/images/Resume.pdf";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './pages.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const mobileImg = {
  width: '100vw'
};

const aboutBottomText = () => {
  return  <div className="about-bottom-text">
  <a href="mailto:abhinav.velaga@utexas.edu">abhinav.velaga@utexas.edu</a>
  <br />
  <a href="https://www.instagram.com/abhi.velaga/" target='_blank'>@abhi.velaga</a>
  <br />
  <a href="https://www.instagram.com/abhi.film/" target='_blank'>@abhi.film</a>
  <br />
  <a href={resume} target='_blank'>[ resume ]</a>
  <br />
  <a href="youtube.com/@abhi.velaga" target='_blank'>youtube</a>
  <br />
  {/* <a href="https://dribbble.com/avelaga" target='_blank'>dribbble</a>
  <br /> */}
  <a href="https://www.github.com/avelaga/" target='_blank'>github</a>
  </div>
};

const bio = () => {
  return <>I'm a software developer, musician, and artist based in Austin, TX where I work as a senior software engineer at <processing>Visa</processing> and studied both Computer Science and Studio Art at <ut>The University of Texas at Austin</ut></>
};

export default function About() {
  return <div className="page">

    {/* desktop  */}
    <MediaQuery minDeviceWidth={500}>
      <div>
      <Navbar activeLink={"ABOUT"} mobile={false} />
      {/* <div className="appear page"> */}
          <div className="about-top">
            <LazyLoadImage src={me1} className="about-top-img" effect="opacity"  />
            <div className="about-second-text">
              {bio()}
            </div>
            <LazyLoadImage src={medrums} className="about-right-img" effect="opacity"  />
          </div>
          <div className="about-bottom">
            <LazyLoadImage src={mecrop} className="about-bottom-img" effect="opacity"  />
            {aboutBottomText()}
          </div>
        {/* </div> */}
      </div>
    </MediaQuery>

    {/* mobile  */}
    <MediaQuery maxDeviceWidth={500}>
      <div>
      <Navbar activeLink={"ABOUT"} mobile={true} />
        <div className="appear">
          <LazyLoadImage effect="opacity" src={mecrop} className="about-top-img"  />
          <div className="about-first-text">
            {bio()}
          </div>
          
          <LazyLoadImage effect="opacity" src={medrums} className="about-bottom-img"  />
          {aboutBottomText()}
          <LazyLoadImage src={me1} className="about-right-img" effect="opacity"  />
        </div>
      </div>
    </MediaQuery>
  </div>;
};