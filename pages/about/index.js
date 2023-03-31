import React from "react";
import Navbar from '../layout/Navbar';
import me1 from "../../dist/images/home/room.jpg";
import meguitar from "../../dist/images/home/guitar.jpg";
import mepurple from "../../dist/images/home/mepurple.jpg";
import mecrop from "../../dist/images/home/mecrop.jpg";
import medrums from "../../dist/images/home/medrums.jpg";
import resume from "../../dist/images/Resume.pdf";
import styles from '@/styles/Pages.module.scss';

const mobileImg = {
  width: '100vw'
};

const aboutBottomText = () => {
  return <div className={styles.about-bottom-text}>
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
    <a href="https://dribbble.com/avelaga" target='_blank'>dribbble</a>
    <br />
    <a href="https://www.github.com/avelaga/" target='_blank'>github</a>
  </div>
};

const bio = () => {
  return <>I'm a software developer, musician, and artist based in Austin, TX where I work as a senior software engineer at <processing>Visa</processing> and studied both Computer Science and Studio Art at <ut>The University of Texas at Austin</ut></>
};

//TODO: refactor to get rid of conditional html

export default function About() {
  let mobile = window.innerWidth < 500;
  return <div className={styles.page}>

    {/* desktop  */}
    {!mobile &&
      <div>
        <Navbar activeLink={"ABOUT"} />
        <div className={styles.about-top}>
          <img src={me1} className={styles.about-top-img} effect="opacity" />
          <div className={styles.about-second-text}>
            {bio()}
          </div>
          <img src={medrums} className={styles.about-right-img} effect="opacity" />
        </div>
        <div className={styles.about-bottom}>
          <img src={mecrop} className={styles.about-bottom-img} effect="opacity" />
          {aboutBottomText()}
        </div>
      </div>
    }

    {/* mobile  */}
    {mobile &&
      <div>
        <Navbar activeLink={"ABOUT"} />
        <div className={styles.appear}>
          <img effect="opacity" src={mecrop} className={styles.about-top-img} />
          <div className={styles.about-first-text}>
            {bio()}
          </div>

          <img effect="opacity" src={medrums} className={styles.about-bottom-img} />
          {aboutBottomText()}
          <img src={me1} className={styles.about-right-img} effect="opacity" />
        </div>
      </div>
    }
  </div>;
};