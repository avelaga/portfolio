import React, { useState } from 'react'
import './layout.scss'

export default function Navbar({activeLink, mobile}){

  const [collapsed, setCollapsed] = useState(mobile);

  const activeStyle = {
    backgroundColor: 'black'
  };

  const isPhotoPage = (activeLink === "PORTFOLIO" || activeLink === "MIAMI" || activeLink === "USERVOID" || activeLink === "EDITORIAL");

  return <div className='navbar'>
        <div className="nav-header">
          <div className="nav-title-container">
          <a href="/"><div className='nav-title'>ABHI VELAGA</div></a>
            {!mobile && <div className='subtitle'>musician, developer, artist</div>}
          </div>

          { mobile && <div className="menu-button" onClick={() => setCollapsed(!collapsed)}>MENU</div> }
        </div>

        {!collapsed && 
          <div>
            <div className='link-container'>
              <a href="/about"><div className='link'  style={activeLink === "ABOUT" ? activeStyle : {}}>ABOUT</div></a>
              <a href="/portfolio"><div className='link' style={isPhotoPage ? activeStyle : {}}>PHOTO</div></a>
              <div className='sublink-container'>
                <a href="/portfolio"><div className='sublink' style={activeLink === "PORTFOLIO" ? activeStyle : {}}>portfolio</div></a>
                <a href="/miamivice"><div className='sublink' style={activeLink === "MIAMI" ? activeStyle : {}}>miami vice cocaine dream</div></a>
                <a href="/uservoid"><div className='sublink' style={activeLink === "USERVOID" ? activeStyle : {}}>user void</div></a>
                <a href="/editorial"><div className='last-sublink' style={activeLink === "EDITORIAL" ? activeStyle : {}}>editorial work</div></a>
              </div>
              <a href="/music"><div className='resume-link' style={activeLink === "MUSIC" ? activeStyle : {}}>MUSIC</div></a>
              <a href="/software"><div className='link' style={activeLink === "SOFTWARE" ? activeStyle : {}}>SOFTWARE</div></a>
              <a href="/hi"><div className='last-link' style={activeLink === "HI" ? activeStyle : {}}>SAY HI</div></a>
            </div>

            <div className='external-link-container'>
            { !mobile && <div className='external-link' /> }
              <a className="external-link" href="https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg" target="_blank">
                SPOTIFY
              </a>
              <a className="external-link" href="https://www.instagram.com/abhi.velaga/" target="_blank">
                INSTAGRAM
              </a>
              <a className="external-link" href="https://www.instagram.com/abhi.film/" target="_blank">
                PHOTO INSTAGRAM
              </a>
              <a className="external-link" href="https://www.youtube.com/@abhi.velaga/" target="_blank">
                YOUTUBE
              </a>
              <a className="external-link" href="mailto:abhinav.velaga@utexas.edu">
                CONTACT
              </a>
            </div>
          </div>
        }
    </div>;  
};