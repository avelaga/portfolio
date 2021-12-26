import React from 'react';
import MediaQuery from 'react-responsive';
import 'react-image-lightbox/style.css';
import Navbar from '../layout/Navbar'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import resume from "../../dist/images/Resume.pdf";
import YouTube from 'react-youtube';
import './pages.css';

import ball from '../../dist/images/software/ball.gif';
import color_animated from '../../dist/images/software/color_animated.gif';
import dot_terrain from '../../dist/images/software/dot_terrain.gif';
import evolution from '../../dist/images/software/evolution.gif';
// import led_zoo from '../../dist/images/software/led_zoo.gif';
// import miami from '../../dist/images/software/miami.gif';
import sin from '../../dist/images/software/sin.gif';
import slb from '../../dist/images/software/slb.jpg';
import bandTogether from '../../dist/images/software/bandtogether.png';
import insideSkoop from '../../dist/images/software/insideskoop.png';
import stairs from '../../dist/images/software/stairs.gif';
import bag from '../../dist/images/software/bag.gif';
import drums from '../../dist/images/software/drum-led.gif';
import drumsVid from '../../dist/images/software/drums.mp4';
// import stairsVid from '../../dist/images/software/stairs.mp4';
import doorVid from '../../dist/images/software/door.mp4';
import bagVid from '../../dist/images/software/bag.mp4';
import dotVid from '../../dist/images/software/dotvid.mp4';
import evolutionVid from '../../dist/images/software/evolution.mp4';
import connectingVid from '../../dist/images/software/connectingvid.mp4';
import ballVid from '../../dist/images/software/ball.mp4';

export default function Software() {

  const getHeight = function(image) {
    var img = new Image();
    img.onload = function () {
      return this.height;
    }
    img.src = image;
  }

  return <div>
    <MediaQuery minDeviceWidth={500}><Navbar activeLink={"SOFTWARE"} mobile={false} /></MediaQuery>
    <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"SOFTWARE"} mobile={true} /></MediaQuery>
    <div className="page">
      <div className="appear">

        <div className="software">
          <div className="software-intro">
            I'm a Computer Science graduate from <ut>The University of Texas at Austin</ut>. I love software development, design, and electronics, and work as a software engineer at <processing>Visa</processing>. I also studied fine arts as a minor and enjoy finding ways to intersect the two passions with tools such as <pi>Raspberry Pi</pi>, <arduino>Arduino</arduino>, and <processing>Processing</processing>. This is a selected collection of my programming and web related projects. For more details about my technical skills, check out my <a href="https://github.com/avelaga" target='_blank'>GitHub</a>, <a href={resume} target='_blank'>resume</a>, and <a href="https://www.linkedin.com/in/abhivelaga/" target='_blank'>linkedin</a>.
          </div>

          <div className="software3 back-img software-flex">
            <LazyLoadImage effect="opacity" src={insideSkoop} className="software-ft" height={getHeight(insideSkoop)} />
            <div className="software-ft-title">INSIDE SKOOP</div>
            <div className="software-ft-subtitle">ui design + front end development</div>
            <div className="software-ft-info">Inside Skoop is a web and iOS app that I'm currently developing which allows UT students to find courses that fit their searching criteria and get advice from those who have taken them.</div>
          </div>

          {/* <div className="flex"> */}

          <YouTube videoId="CcSitqAJFZk" className="software-youtube" />
          <div className="software-ft-title">THE WORLD MISSES YOU</div>
          <div className="software-ft-info">"The World Misses You" is a led installation that responds to the changing weather and time (via web APIs) to automatically transition to matching animations, such as rain drops when it's raining and a twinkling animation when it turns night, in effect bringing the outside conditions inside and giving the room a life of it's own.</div>

          <div className="software2 software-flex">
      
            <video playsInline autoPlay muted loop className="software2-img" >
              <source src={dotVid} type="video/mp4" />
              <LazyLoadImage effect="opacity" src={dot_terrain} className="software2-img" height={getHeight(dot_terrain)} />
            </video>

            <LazyLoadImage effect="opacity" src={sin} className="software2-img" height={getHeight(sin)} />
            <video playsInline autoPlay muted loop className="software2-img" >
              <source src={evolutionVid} type="video/mp4" />
              <LazyLoadImage effect="opacity" src={evolution} className="software2-img" height={getHeight(evolution)} />
            </video>

            <video playsInline autoPlay muted loop className="software2-img" >
              <source src={connectingVid} type="video/mp4" />
              <LazyLoadImage effect="opacity" src={color_animated} className="software2-img" height={getHeight(color_animated)} />
            </video>

            <video playsInline autoPlay muted loop className="software2-img" >
              <source src={ballVid} type="video/mp4" />
              <LazyLoadImage effect="opacity" src={ball} className="software2-img" height={getHeight(ball)} />
            </video>
            <div className="software-ft-title">COMPUTER GRAPHICS</div>
            <div className="software-ft-info">I've designed and programmed an evolution simulation, natural tree drawing algorithms, terrain generation, multiple games, and generative art algorithms with <processing>Processing</processing>.</div>
          </div>

          <div className="software1 back-img software-flex">
            <LazyLoadImage effect="opacity" src={bandTogether} className="software-ft" height={getHeight(bandTogether)} />
            <div className="software-ft-title">BAND TOGETHER</div>
            <div className="software-ft-subtitle">ui design + front end development</div>
            <div className="software-ft-info">I designed and developed the front end for Band Together, a responsive web app that helps users easily find information about upcoming concerts.</div>
            {/* <a href="https://bandtogether.events" target='_blank'><div className="software-ft-button">VIEW</div></a> */}
          </div>

          <video playsInline autoPlay muted loop className="drum-vid" >
            <source src={drumsVid} type="video/mp4" />
            <LazyLoadImage effect="opacity" src={drums} width="100%" height={getHeight(drums)} />
          </video>

          <div className="software-grid">
            <div className="software-grid-text flex">
              <div className="grid-text-title">LED STRIP PROGRAMMING</div>
              <div>
                I love finding ways to intersect my passions for computer science with that of fine arts. Coding LED strips with Arduinos has been a great way to do so - I've built and programmed commissioned interactive installations for music shows, such as Fortress Festival in Ft. Worth, TX in April 2019, an interactive "zoo" with "animals" that require daily human interaction in order to stay alive and breed, motion responsive staircase and doorways, and even stitched custom coded strips to my backpack for maximum visibility when riding my electric skateboard at night. I also created a <a href="/hi">button</a> on my site that allows visitors to say hello to me in realtime by strobing LEDs at my desk.
              </div>
            </div>

            <div className="grid-stairs">
              <video playsInline autoPlay muted loop width="100%">
                <source src={doorVid} type="video/mp4" />
                <LazyLoadImage effect="opacity" src={stairs} width="100%" height={getHeight(stairs)} />
              </video>
            </div>

            <div className="grid-bag">
              <video playsInline autoPlay muted loop width="100%">
                <source src={bagVid} type="video/mp4" />
                <LazyLoadImage effect="opacity" src={bag} width="100%" height={getHeight(bag)} />
              </video>
            </div>
          </div>

          <div className="slb flex">
            <LazyLoadImage effect="opacity" src={slb} height={getHeight(slb)} className="slb-img" />
            <div className="slb-text">
              I also integrated LEDs into my final presentation for my software engineer internship at Schlumberger.
            </div>
          </div>

          {/* <div className="desk back-img flex">
            <div className="freelance">I'm available for freelance web design + development!</div>
            <div className="software-ft-info">I create unique websites for desktop + mobile with the ability for you to edit your own content, along with hosting and continuous support. If you have an idea, need a developer, or just want to say hi, shoot me a message!</div>
            <a href="mailto:abhinav.velaga@utexas.edu"><div className="software-ft-button">Get in touch!</div></a>
          </div> */}
        </div>
      </div>
    </div>
  </div>;
};