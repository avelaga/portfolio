import React, { useState } from 'react'
import MediaQuery from 'react-responsive'
import './layout.scss'

export default function Navbar({activeLink}){

  const [collapsed, setCollapsed] = useState(true);

  const activeStyle = {
    backgroundColor: 'black'
  };

  return <div className='navbar-container'>
    <div className='navbar'>
      <div className='nav-title'>Abhi Velaga</div>
        <div className='subtitle'>austin, tx</div>
        
        <div className='link-container'>
        <a href="/about"><div className='link'  style={activeLink === "ABOUT" ? activeStyle : {}}>ABOUT</div></a>
        <a href="/photo"><div className='link' style={activeLink === "PHOTO" ? activeStyle : {}}>PHOTO</div></a>
          <div className='sublink-container'>
          <a href="/portfolio"><div className='sublink' style={activeLink === "PORTFOLIO" ? activeStyle : {}}>portfolio</div></a>
          <a href="/miamivice"><div className='sublink' style={activeLink === "MIAMI" ? activeStyle : {}}>miami vice cocaine dream</div></a>
          <a href="/uservoid"><div className='sublink' style={activeLink === "USERVOID" ? activeStyle : {}}>user void</div></a>
          <a href="/published"><div className='last-sublink' style={activeLink === "PUBLISHED" ? activeStyle : {}}>published work</div></a>
          </div>
          <a href="/music"><div className='resume-link' style={activeLink === "MUSIC" ? activeStyle : {}}>MUSIC</div></a>
          <a href="/software"><div className='link' style={activeLink === "SOFTWARE" ? activeStyle : {}}>SOFTWARE</div></a>
          <a href="/hi"><div className='last-link' style={activeLink === "HI" ? activeStyle : {}}>SAY HI</div></a>
        </div>
        <div className='external-link' />
        <a href="https://open.spotify.com/artist/7JCVu8JTFAFrHqnYnGVPhi?si=wAs1clwUTiqOqS8e8RUJqg" target="_blank">
                <div className="external-link">SPOTIFY</div>
              </a>
              <a href="https://www.instagram.com/abhi.velaga/" target="_blank">
                <div className="external-link">INSTAGRAM</div>
              </a>

              <a href="https://www.instagram.com/abhi.film/" target="_blank">
                <div className="external-link">PHOTO INSTAGRAM</div>
              </a>

              <a href="https://www.youtube.com/@abhi.velaga/" target="_blank">
                <div className="external-link">YOUTUBE</div>
              </a>

              <a href="mailto:abhinav.velaga@utexas.edu"><div className="external-link">CONTACT</div></a>
    </div>
    </div>;  
};