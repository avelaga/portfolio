'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ activeLink }) {
  const [mobile, setMobile] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBgLoaded(true), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 500px)');
    setMobile(mq.matches);
    setCollapsed(mq.matches);
    const handler = (e) => {
      setMobile(e.matches);
      setCollapsed(e.matches);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const activeStyle = {
    backgroundColor: 'black'
  };

  const isPhotoPage = (activeLink === "PORTFOLIO" || activeLink === "MIAMI" || activeLink === "USERVOID" || activeLink === "EDITORIAL");

  return <div>
    <div className={collapsed ? "unblur" : "blur"} />
    <div className="navbar" style={mobile && collapsed && bgLoaded ? { mixBlendMode: 'difference' } : {}}>
      <div className="nav-header">
        <div className="nav-title-container">
          <Link href="/">
            <div className='nav-title'>
              <div className="nav-title-text">
                ABHI VELAGA
              </div>
            </div>
          </Link>
          <div className='subtitle'>creator and developer</div>
        </div>

        <div className="menu-button" onClick={() => setCollapsed(!collapsed)}>
          <div className="nav-title-text">
            MENU
          </div>
        </div>
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
            <div className='external-link external-link-divider' />
            <a className="external-link" href="https://www.youtube.com/@abhi.velaga/" target="_blank" rel="noopener noreferrer">
              YOUTUBE
            </a>
            <a className="external-link" href="https://www.instagram.com/abhi.velaga/" target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
            <a className="external-link" href="https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg" target="_blank" rel="noopener noreferrer">
              SPOTIFY
            </a>
            <a className="external-link" href="https://shop.abhi.work" target="_blank" rel="noopener noreferrer">
              MERCH
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
