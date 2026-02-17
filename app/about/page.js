'use client';

import React from "react";
import Navbar from '../components/Navbar';

const aboutBottomText = () => {
  return <div className="about-bottom-text">
    <a href="mailto:abhinav.velaga@utexas.edu">abhinav.velaga@utexas.edu</a>
    <br />
    <a href="https://www.instagram.com/abhi.velaga/" target='_blank'>@abhi.velaga</a>
    <br />
    <a href="https://www.instagram.com/abhi.film/" target='_blank'>@abhi.film</a>
    <br />
    <a href="/images/Resume.pdf" target='_blank'>[ resume ]</a>
    <br />
    <a href="youtube.com/@abhi.velaga" target='_blank'>youtube</a>
    <br />
    <a href="https://www.github.com/avelaga/" target='_blank'>github</a>
    <br />
    <a href="https://shop.abhi.work" target='_blank'>merch</a>
    <br />
  </div>
};

const bio = () => {
  return <>I&apos;m a musician, interdisciplinary creator, and software developer based in Austin, TX, where I work as a senior software engineer at <processing>Visa</processing> and studied both Computer Science and Studio Art at <ut>The University of Texas at Austin</ut>. <br /><br />My career centers on building and shipping polished websites with a focus on tight UX, while my creative practice spans music, visual storytelling, and digital media. Most recently I&apos;ve been passionate about documenting and sharing my journey learning how to work on cars on my <a href="https://youtube.com/@abhi.velaga" target="_blank"><yt>youtube channel</yt></a>.</>;
};

export default function About() {
  return <div className="page">
    <Navbar activeLink={"ABOUT"} />

    {/* desktop  */}
    <div className="about-desktop">
      <div className="about-top">
        <img src="/images/music/indulgent/indulgentlive.webp" alt="indulgent performing live" className="about-top-img" loading="lazy" />
        <div className="about-second-text">
          {bio()}
        </div>
        <img src="/images/home/medrums.webp" alt="me drumming" className="about-right-img" loading="lazy" />
      </div>
      <div className="about-bottom">
        <img src="/images/home/mecrop.webp" alt="portait of me" className="about-bottom-img" loading="lazy" />
        {aboutBottomText()}
      </div>
    </div>

    {/* mobile  */}
    <div className="about-mobile appear">
      <img src="/images/home/mecrop.webp" alt="portait of me" className="about-top-img" loading="lazy" />
      <div className="about-first-text">
        {bio()}
      </div>
      <img src="/images/home/medrums.webp" alt="me drumming" className="about-bottom-img" loading="lazy" />
      {aboutBottomText()}
      <img src="/images/music/indulgent/indulgentlive.webp" alt="indulgent performing live" className="about-right-img" loading="lazy" />
    </div>
  </div>;
}
