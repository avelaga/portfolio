'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ activeLink, mobile }) {
  const [collapsed, setCollapsed] = useState(mobile);

  const activeStyle = {
    backgroundColor: 'black'
  };

  const whiteText = {
    color: 'white',
    transition: 'color 1s'
  };

  const defaultText = {
    transition: 'color 1s'
  };

  function calcTextColor() {
    if (mobile) {
      return whiteText;
    } else {
      return defaultText;
    }
  }

  const isPhotoPage = (activeLink === "PORTFOLIO" || activeLink === "MIAMI" || activeLink === "USERVOID" || activeLink === "EDITORIAL");

  return <div>
    <div className={collapsed ? "unblur" : "blur"} />
    <div className="navbar">
      <div className="nav-header">
        <div className="nav-title-container">
          <Link href="/">
            <div className='nav-title'>
              <div style={calcTextColor()}>
                ABHI VELAGA
              </div>
            </div>
          </Link>
          {!mobile && <div className='subtitle'>creator and developer</div>}
        </div>

        {mobile && <div className="menu-button" onClick={() => setCollapsed(!collapsed)}>
          <div style={calcTextColor()}>
            MENU
          </div>
        </div>}
      </div>

      {!collapsed &&
        <div>
          <div className='link-container'>
            <Link href="/about"><div className='link' style={activeLink === "ABOUT" ? activeStyle : {}}>ABOUT</div></Link>
            <Link href="/portfolio"><div className='link' style={isPhotoPage ? activeStyle : {}}>PHOTO</div></Link>
            <div className='sublink-container'>
              <Link href="/portfolio"><div className='sublink' style={activeLink === "PORTFOLIO" ? activeStyle : {}}>portfolio</div></Link>
              <Link href="/miamivice"><div className='sublink' style={activeLink === "MIAMI" ? activeStyle : {}}>miami vice cocaine dream</div></Link>
              <Link href="/uservoid"><div className='sublink' style={activeLink === "USERVOID" ? activeStyle : {}}>user void</div></Link>
              <Link href="/editorial"><div className='last-sublink' style={activeLink === "EDITORIAL" ? activeStyle : {}}>editorial work</div></Link>
            </div>
            <Link href="/music"><div className='resume-link' style={activeLink === "MUSIC" ? activeStyle : {}}>MUSIC</div></Link>
            <Link href="/software"><div className='link' style={activeLink === "SOFTWARE" ? activeStyle : {}}>SOFTWARE</div></Link>
            <Link href="/hi"><div className='last-link' style={activeLink === "HI" ? activeStyle : {}}>SAY HI</div></Link>
          </div>

          <div className='external-link-container'>
            {!mobile && <div className='external-link' />}
            <a className="external-link" href="https://www.youtube.com/@abhi.velaga/" target="_blank">
              YOUTUBE
            </a>
            <a className="external-link" href="https://www.instagram.com/abhi.velaga/" target="_blank">
              INSTAGRAM
            </a>
            <a className="external-link" href="https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg" target="_blank">
              SPOTIFY
            </a>
            <a className="external-link" href="https://www.instagram.com/abhi.film/" target="_blank">
              PHOTO INSTAGRAM
            </a>
            <a className="external-link" href="mailto:abhinav.velaga@utexas.edu">
              CONTACT
            </a>
          </div>
        </div>
      }
    </div>
  </div>;
}
