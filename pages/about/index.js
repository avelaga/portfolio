import React, {useState, useEffect} from "react";
import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../Navbar'
import me1 from "../../public/images/home/room.jpg";
import meguitar from "../../public/images/home/guitar.jpg";
import mepurple from "../../public/images/home/mepurple.jpg";
import mecrop from "../../public/images/home/mecrop.jpg";
import medrums from "../../public/images/home/medrums.jpg";
import resume from "../../public/images/Resume.pdf";
import styles from '../../styles/Pages.module.scss';

const mobileImg = {
  width: '100vw'
};

const aboutBottomText = () => {
  return <div className={styles.about_bottom_text}>
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
  const size = useWindowSize();
  let mobile = size.width < 500;
  return <>
  <Head>
    <title>Abhi Velaga - About</title>
    <meta property="og:title" content="Abhi Velaga" />

    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
    <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" />
    <meta charset="UTF-8" />

    <meta property="og:image" content="images/home/room.jpg" />
    <meta property="og:site_name" content="Software Developer, Musician, Artist" />
    <meta property="og:description" content="Software Developer, Musician, Artist" />
    <meta name="description" content="Software Developer, Musician, Artist" />

    <meta property="og:url" content="https://abhi.work" />
    <meta name="keywords" content="Abhinav Velaga, UT Austin, Indulgent, Raspberry Pi, Rock Music, Film Photography, Electronics, Arduino, Art, Kodak, Portra, Nikon, Bronica, KVRX, Computer Science, Developer, Shivering Demons, Caladan, SXSW" />
    <meta name="author" content="Abhi Velaga" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content="Software Developer, Musician, Artist" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165347174-1"></script>

     {/* TODO: verify this is thew correct syntax for adding analytics in Next */}
    {/* <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments) }
      gtag('js', new Date());
      gtag('config', 'UA-165347174-1');
    </script> */}
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js" />
  </Head>
  <div className={styles.page}>

    {/* desktop  */}
    {!mobile &&
      <div>
        <Navbar activeLink={"ABOUT"} />
        <div className={styles.about_top}>
          <Image src={me1} className={styles.about_top_img} effect="opacity" />
          <div className={styles.about_second_text}>
            {bio()}
          </div>
          <Image src={medrums} className={styles.about_right_img} effect="opacity" />
        </div>
        <div className={styles.about_bottom}>
          <Image src={mecrop} className={styles.about_bottom_img} effect="opacity" />
          {aboutBottomText()}
        </div>
      </div>
    }

    {/* mobile  */}
    {mobile &&
      <div>
        <Navbar activeLink={"ABOUT"} />
        <div className={styles.appear}>
          <Image effect="opacity" src={mecrop} className={styles.about_top_img} />
          <div className={styles.about_first_text}>
            {bio()}
          </div>

          <Image effect="opacity" src={medrums} className={styles.about_bottom_img} />
          {aboutBottomText()}
          <Image src={me1} className={styles.about_right_img} effect="opacity" />
        </div>
      </div>
    }
  </div>
  </>;
};

// TODO: import this from navabr and delete dupliacate function from here
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the_perils_of_rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}