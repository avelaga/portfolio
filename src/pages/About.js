import React from "react";
import Navbar from '../layout/Navbar'
import MediaQuery from 'react-responsive'
import me1 from "../../dist/images/home/room.jpg";
import me2 from "../../dist/images/home/mirror.jpg";
import resume from "../../dist/images/Resume.pdf";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './pages.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const mobileImg = {
  width: '100vw'
};

export default function About() {
  return <div>
    <MediaQuery minDeviceWidth={500}><Navbar activeLink={"ABOUT"} mobile={false} /></MediaQuery>
    <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"ABOUT"} mobile={true} /></MediaQuery>

    {/* desktop  */}
    <MediaQuery minDeviceWidth={500}>
      <div className="page">
        <div className="appear">
          <div className="about-top">
            <LazyLoadImage src={me1} className="about-top-img" effect="opacity"  />
            <div className="about-second-text">
            I'm a software developer, musician, and artist based in Austin, TX where I work as a software engineer at <processing>Visa</processing> and studied both Computer Science and Studio Art at <ut>The University of Texas at Austin</ut>.
              <br />
              <br />
              I released my first solo album at the age of 16 and a second at 18, my first photo collection at the age of 19, played my first official SXSW showcase at the age of 20, built my first interactive art installation for Fortress Festival a month later, and had my photography featured on the cover of Spark Magazine.
          </div>
          </div>
          <div className="about-bottom">
            <div className="about-bottom-left-text">
              Web design and development by Abhi Velaga
          </div>
            <LazyLoadImage src={me2} className="about-bottom-img" effect="opacity"  />
            <div className="about-bottom-text">
              <a href="mailto:abhinav.velaga@utexas.edu">abhinav.velaga@utexas.edu</a>
              <br />
              <a href="https://www.instagram.com/abhi.velaga/" target='_blank'>@abhi.velaga</a>
              <br />
              <a href="https://www.instagram.com/abhi.film/" target='_blank'>@abhi.film</a>
              <br />
              <a href={resume} target='_blank'>[ resume ]</a>
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>

    {/* mobile  */}
    <MediaQuery maxDeviceWidth={500}>
      <div className="page">
        <div className="appear">
          <div className="about-first-text">
          I'm a software developer, musician, and artist based in Austin, TX where I work as a software engineer at <processing>Visa</processing> and studied both Computer Science and Studio Art at <ut>The University of Texas at Austin</ut>.
          </div>
          <LazyLoadImage effect="opacity" src={me1} className="about-top-img"  />
          <div className="about-second-text">
          I released my first solo album at the age of 16 and a second at 18, my first photo collection at the age of 19, played my first official SXSW showcase at the age of 20, built my first interactive art installation for Fortress Festival a month later, and had my photography featured on the cover of Spark Magazine.
          </div>
          <LazyLoadImage effect="opacity" src={me2} className="about-bottom-img"  />

          <div className="about-bottom-text">
            <a href="mailto:abhinav.velaga@utexas.edu">abhinav.velaga@utexas.edu</a>
            <br />
            <a href="https://www.instagram.com/abhi.velaga/" target='_blank'>@abhi.velaga</a>
            <br />
            <a href="https://www.instagram.com/abhi.film/" target='_blank'>@abhi.film</a>
            <br />
            <a href={resume} target='_blank'>[ resume ]</a>
          </div>

          <div className="about-bottom-left-text">
            Web design and development by Abhi Velaga
          </div>
        </div>
      </div>
    </MediaQuery>
  </div>;
};