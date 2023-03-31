import React, { useState, useEffect } from 'react'
// import mediaQuery from './mediaQuery';
import styles from '../styles/Navbar.module.scss'

export default function Navbar({ activeLink }) {

  // let mobile = mediaQuery();
  // let mobile = window.innerWidth < 500;
  const size = useWindowSize();
  let mobile = size.width < 500;
  const [collapsed, setCollapsed] = useState(mobile);
  console.log(collapsed);

  const activeStyle = {
    backgroundColor: 'black'
  };

  const whiteText = {
    color: 'white',
    transition: 'color 1s'
  }

  const defaultText = {
    transition: 'color 1s'
  }

  function calcTextColor() {
    if (mobile) {
      if (!collapsed) {
        return whiteText;
      } else {
        return defaultText;
      }
    } else {
      return defaultText;
    }
  }

  const isPhotoPage = (activeLink === "PORTFOLIO" || activeLink === "MIAMI" || activeLink === "USERVOID" || activeLink === "EDITORIAL");

  return <div>
    <div className={collapsed ? styles.unblur : styles.blur} />
    <div className={styles.navbar}>
      <div className={styles.nav_header}>
        <div className={styles.nav_title_container}>
          <a href="/">
            <div className={styles.nav_title}>
              <div style={calcTextColor()}>
                ABHI VELAGA
              </div>
            </div>
          </a>
          {!mobile && <div className={styles.subtitle}>musician, developer, artist</div>}
        </div>

        {mobile && <div className={styles.menu_button} onClick={() => setCollapsed(!collapsed)}>
          <div style={calcTextColor()}>
            MENU
          </div>
        </div>}
      </div>

      {!collapsed &&
        <div>
          <div className={styles.link_container}>
            <a href="/about"><div className={styles.link} style={activeLink === "ABOUT" ? activeStyle : {}}>ABOUT</div></a>
            <a href="/portfolio"><div className={styles.link} style={isPhotoPage ? activeStyle : {}}>PHOTO</div></a>
            <div className={styles.sublink_container}>
              <a href="/portfolio"><div className={styles.sublink} style={activeLink === "PORTFOLIO" ? activeStyle : {}}>portfolio</div></a>
              <a href="/miamivice"><div className={styles.sublink} style={activeLink === "MIAMI" ? activeStyle : {}}>miami vice cocaine dream</div></a>
              <a href="/uservoid"><div className={styles.sublink} style={activeLink === "USERVOID" ? activeStyle : {}}>user void</div></a>
              <a href="/editorial"><div className={styles.last_sublink} style={activeLink === "EDITORIAL" ? activeStyle : {}}>editorial work</div></a>
            </div>
            <a href="/music"><div className={styles.resume_link} style={activeLink === "MUSIC" ? activeStyle : {}}>MUSIC</div></a>
            <a href="/software"><div className={styles.link} style={activeLink === "SOFTWARE" ? activeStyle : {}}>SOFTWARE</div></a>
            <a href="/hi"><div className={styles.last_link} style={activeLink === "HI" ? activeStyle : {}}>SAY HI</div></a>
          </div>

          <div className={styles.external_link_container}>
            {!mobile && <div className={styles.external_link} />}
            <a className={styles.external_link} href="https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg" target="_blank">
              SPOTIFY
            </a>
            <a className={styles.external_link} href="https://www.instagram.com/abhi.velaga/" target="_blank">
              INSTAGRAM
            </a>
            <a className={styles.external_link} href="https://www.instagram.com/abhi.film/" target="_blank">
              PHOTO INSTAGRAM
            </a>
            <a className={styles.external_link} href="https://www.youtube.com/@abhi.velaga/" target="_blank">
              YOUTUBE
            </a>
            <a className={styles.external_link} href="mailto:abhinav.velaga@utexas.edu">
              CONTACT
            </a>
          </div>
        </div>
      }
    </div>
  </div>;
};

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
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