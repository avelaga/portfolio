import React from 'react'
import MediaQuery from 'react-responsive'
import './layout.scss'

export default function Navbar(){
  return <div className='navbar-container'>
    <div className='navbar'>
      <div className='nav-title'>Abhi Velaga</div>
        <div className='subtitle'>austin, tx</div>
        
        <div className='link-container'>
          <div className='link'>ABOUT</div>
          <div className='link'>PHOTO</div>
          <div className='sublink-container'>
            <div className='sublink'>portfolio</div>
            <div className='sublink'>miami vice cocaine dream</div>
            <div className='sublink'>user void</div>
            <div className='last-sublink'>published work</div>
          </div>
          <div className='resume-link'>MUSIC</div>
          <div className='link'>SOFTWARE</div>
          <div className='last-link'>SAY HI</div>
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