import React from 'react'
import MediaQuery from 'react-responsive'
import './layout.scss'

export default function Navbar(){
  return <div className='navbar-container'>
    <div className='navbar'>
      <div className='nav-title'>Abhi Velaga</div>
        <div className='subtitle'>austin, tx</div>
        
        <div className='link-container'>
        <a href="/about"><div className='link'>ABOUT</div></a>
        <a href="/photo"><div className='link'>PHOTO</div></a>
          <div className='sublink-container'>
          <a href="/portfolio"><div className='sublink'>portfolio</div></a>
          <a href="/miamivice"><div className='sublink'>miami vice cocaine dream</div></a>
          <a href="/uservoid"><div className='sublink'>user void</div></a>
          <a href="/published"><div className='last-sublink'>published work</div></a>
          </div>
          <a href="/music"><div className='resume-link'>MUSIC</div></a>
          <a href="/software"><div className='link'>SOFTWARE</div></a>
          <a href="/hi"><div className='last-link'>SAY HI</div></a>
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