'use client';

import Navbar from '../components/Navbar';
import FadeInOnLoad from '../components/FadeInOnLoad';

const aboutBottomText = () => {
  return <div className="about-bottom-text">
    <a href="mailto:abhinav.velaga@utexas.edu">abhinav.velaga@utexas.edu</a>
    <br />
    <a href="https://www.instagram.com/abhi.velaga/" target='_blank' rel="noopener noreferrer">@abhi.velaga</a>
    <br />
    <a href="https://www.instagram.com/abhi.film/" target='_blank' rel="noopener noreferrer">@abhi.film</a>
    <br />
    <a href="/resume">[ resume ]</a>
    <br />
    <a href="https://youtube.com/@abhi.velaga" target='_blank' rel="noopener noreferrer">youtube</a>
    <br />
    <a href="https://www.github.com/avelaga/" target='_blank' rel="noopener noreferrer">github</a>
    <br />
    <a href="https://shop.abhi.work" target='_blank' rel="noopener noreferrer">merch</a>
    <br />
  </div>
};

const bio = () => {
  return <>I'm a creator and design engineer based in Austin, TX who's obsessed with using the web as a storytelling medium.
    <br /><br />
    I've been pursuing a variety of creative endeavors since I was 15 - from self produced music albums and fine art photography collections, to interactive LED exhibitions - and most recently started producing videos on my <a href="https://youtube.com/@abhi.velaga" target="_blank" rel="noopener noreferrer"><yt>youtube channel</yt></a> where I'm documenting my car build.
    <br /><br />
    In my professional career, I'm a senior frontend engineer at Biorce, where I'm building our design system from the ground up, and previously worked at Visa where I built and maintained our design system and shipped interfaces for our global merchant network.
    <br /><br />
    I studied both Computer Science and Studio Art at UT Austin.
  </>;
};


export default function About() {
  return <div className="page">
    <Navbar activeLink={"ABOUT"} />

    {/* desktop  */}
    <div className="about-desktop">
      <div className="about-top">
        <FadeInOnLoad src="/images/music/indulgent/indulgentlive.webp" alt="indulgent performing live" cls="about-top-img" width={2000} height={1125} />
        <div className="about-second-text">
          {bio()}
        </div>
        <FadeInOnLoad src="/images/home/medrums.webp" alt="me drumming" cls="about-right-img" width={2000} height={1493} />
      </div>
      <div className="about-bottom">
        <FadeInOnLoad src="/images/home/mecrop.webp" alt="portait of me" cls="about-bottom-img" width={2000} height={1493} />
        {aboutBottomText()}
      </div>
    </div>

    {/* mobile  */}
    <div className="about-mobile appear">
      <FadeInOnLoad src="/images/home/mecrop.webp" alt="portait of me" cls="about-top-img" width={2000} height={1493} />
      <div className="about-first-text">
        {bio()}
      </div>
      <FadeInOnLoad src="/images/home/medrums.webp" alt="me drumming" cls="about-bottom-img" width={2000} height={1493} />
      {aboutBottomText()}
      <FadeInOnLoad src="/images/music/indulgent/indulgentlive.webp" alt="indulgent performing live" cls="about-right-img" width={2000} height={1125} />
    </div>
  </div>;
}
