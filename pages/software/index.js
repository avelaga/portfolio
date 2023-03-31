import React from 'react';
import Navbar from '../layout/Navbar'
import YouTube from 'react-youtube';
import dadalab1 from "../../dist/images/software/dadalab/dadalab1.jpg";
import dadalab2 from "../../dist/images/software/dadalab/dadalab2.jpg";
import dadalab3 from "../../dist/images/software/dadalab/dadalab3.jpg";
import dadalab4 from "../../dist/images/software/dadalab/dadalab4.jpg";
import dadalab5 from "../../dist/images/software/dadalab/dadalab5.jpg";
import './pages.scss';

// Electric Forest - Fortress Festival, Fort Worth - 2019
// unnamed - The Acid Test, Austin - 2019
// The World Misses You - Dadageek Fall Exhibition, Austin - 2022

const theWorldMissesYouInfo = `"the world misses you" is a led installation that responds to the changing
weather and time via web APIs to automatically transition to matching animations,
such as rain drops when it's raining and a twinkling animation when it turns night, 
bringing the outside conditions inside and giving the indoors a life of its own`;

export default function Software() {
  return <div className="page">
    <Navbar activeLink={"SOFTWARE"} />
      <div className="title">the world misses you</div>
      <div className="section-year">2021</div>
      <div className='row'>
        <div className="half-right dadalab-text-container">
          <div className="software-info">{theWorldMissesYouInfo}</div>
          <div className="software-caption">dadalab, austin, tx <br/>2022</div>
        </div>
        <img src={dadalab1} className="half-right software-mobile-photo" />
      </div>
      <img src={dadalab2} className='full software-mobile-photo' />
      <img src={dadalab3} className='half-left software-mobile-photo' />
      <img src={dadalab4} className='half-right software-mobile-photo' />
      {/* <img src={dadalab5} className='software-half-left software-mobile-photo' /> */}
      <YouTube videoId="CcSitqAJFZk" className="software-youtube  software-mobile-photo"/>
      <div className="line" />
      <div className="title">say hi</div>
      <div className="section-year">2020</div>
      <div className="line" />
      <div className="title">electric forest</div>
      <div className="section-year">2020</div>
      <div className="line" />
      <div className="title">acid test</div>
      <div className="section-year">2019</div>
  </div>;
};