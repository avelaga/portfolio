'use client';

import React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../components/Navbar';

const theWorldMissesYouInfo = `"the world misses you" is a led installation that responds to the changing
weather and time via web APIs to automatically transition to matching animations,
such as rain drops when it's raining and a twinkling animation when it turns night,
bringing the outside conditions inside and giving the indoors a life of its own`;

export default function Software() {
  return <div className="page">
    <MediaQuery minDeviceWidth={500}><Navbar activeLink={"SOFTWARE"} mobile={false} /></MediaQuery>
    <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"SOFTWARE"} mobile={true} /></MediaQuery>
      <div className="title">the world misses you</div>
      <div className="section-year">2021</div>
      <div className='row'>
        <div className="half-right dadalab-text-container">
          <div className="software-info">{theWorldMissesYouInfo}</div>
          <div className="software-caption">dadalab, austin, tx <br/>2022</div>
        </div>
        <img src="/images/software/dadalab/dadalab1.jpg" className="half-right software-mobile-photo" loading="lazy" />
      </div>
      <img src="/images/software/dadalab/dadalab2.jpg" className='full software-mobile-photo' loading="lazy" />
      <img src="/images/software/dadalab/dadalab3.jpg" className='half-left software-mobile-photo' loading="lazy" />
      <img src="/images/software/dadalab/dadalab4.jpg" className='half-right software-mobile-photo' loading="lazy" />
      <iframe className="software-youtube software-mobile-photo" src="https://www.youtube.com/embed/CcSitqAJFZk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  </div>;
}
