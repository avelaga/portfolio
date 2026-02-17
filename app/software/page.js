'use client';

import React from 'react';
import Navbar from '../components/Navbar';

const theWorldMissesYouInfo = `"the world misses you" is a led installation that responds to the changing
weather and time via web APIs to automatically transition to matching animations,
such as rain drops when it's raining and a twinkling animation when it turns night,
bringing the outside conditions inside and giving the indoors a life of its own`;

export default function Software() {
  return <div className="page">
    <Navbar activeLink={"SOFTWARE"} />
      <h1 className="title">the world misses you</h1>
      <div className="section-year">2021</div>
      <div className='row'>
        <div className="half-right dadalab-text-container">
          <div className="software-info">{theWorldMissesYouInfo}</div>
          <div className="software-caption">dadalab, austin, tx <br/>2022</div>
        </div>
        <img src="/images/software/dadalab/dadalab1.webp" alt="rain animation at dadalab exhibition" className="half-right software-mobile-photo" loading="lazy" />
      </div>
      <img src="/images/software/dadalab/dadalab2.webp" alt="sunny animation at dadalab exhibition" className='full software-mobile-photo' loading="lazy" />
      <img src="/images/software/dadalab/dadalab3.webp" alt="starry night animation at dadalab exhibition" className='half-left software-mobile-photo' loading="lazy" />
      <img src="/images/software/dadalab/dadalab4.webp" alt="viewing the exhibition" className='half-right software-mobile-photo' loading="lazy" />
      <iframe loading="lazy" className="software-youtube software-mobile-photo" src="https://www.youtube.com/embed/CcSitqAJFZk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  </div>;
}
