import React from "react";
import Button from 'react-bootstrap/Button';
import MediaQuery from 'react-responsive';
import Navbar from '../layout/Navbar';
import YouTube from 'react-youtube';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import './pages.scss';
import styles from './Music.module.scss';

import drums from '../../dist/images/music/indulgent/drums.jpg';
import guitar1 from '../../dist/images/music/indulgent/guitar1.jpg';
import guitar2 from '../../dist/images/music/indulgent/guitar2.jpg';
import indulgentCover from '../../dist/images/music/indulgent/cover.jpg';
import mebed from '../../dist/images/music/indulgent/mebed.jpg';

import mjf from '../../dist/images/music/mjf/mjf.jpg';
import mjfStudio from '../../dist/images/music/mjf/studio.jpg';
import mjfCover from '../../dist/images/music/mjf/cover.jpg';

import sd1 from '../../dist/images/music/sd/sd1.jpg';
import sd2 from '../../dist/images/music/sd/sd2.jpg';

export default function Music() {

  const getHeight = function(image) {
    var img = new Image();
    img.onload = function () {
      return this.height;
    }
    img.src = image;
  }

  return (
  <div>
    <Navbar activeLink={"MUSIC"} />
    <div className="wrapper appear">
        {/* indulgent  */}
        <div className="parallax">
          <img src={mebed} className="parallax-img" />
          <div className="parallax-title-black">INDULGENT</div>
        </div>

        <div className="indulgent-grid" >
          <LazyLoadImage effect="opacity" src={guitar1} className="indulgent-grid-img" width="100%" height={getHeight(drums)} />
          <LazyLoadImage effect="opacity" src={guitar2} className="indulgent-grid-img" width="100%" height={getHeight(drums)} />
          <div className="flex indulgent-grid-text">
            <div className="music-text">
              I perform all vocals, drums, guitars, and bass myself for my solo project, Indulgent, and released my recent album, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">No Drive Will Take Me Home</a>, in 2018 and my debut album, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">Toxic</a>, in 2015.
            </div>
          </div>
        </div>

        {/* desktop  */}
        <MediaQuery minDeviceWidth={500}>
          <div className="flex cover-container">
            <div className="indulgent-cover-info flex" >
              <div className="cover-title" >No Drive Will Take Me Home</div>
              <div className="cover-artist" >Indulgent</div>
              <div className="indulgent-buttons cover-buttons flex">
                <Button variant="outline-dark"><a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=wxw93aEFTfGDUXMgTjEzsg" target="_blank">SPOTIFY</a></Button>
                <Button variant="outline-dark"><a href="https://music.apple.com/us/album/no-drive-will-take-me-home/1429049796" target="_blank">APPLE MUSIC</a></Button>
                <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Indulgent_No_Drive_Will_Take_Me_Home?id=Bcwfm3gxejnt5fvkv2hlhxgxdei" target="_blank">GOOGLE PLAY</a></Button></div>
              {/* <div>Guitar/Drums/Vocals/Bass performed by Abhi Velaga</div> */}
              <div>Released 2018</div>
            </div>
            <LazyLoadImage effect="opacity" src={indulgentCover} className="music-cover" height={getHeight(indulgentCover)} />
          </div>
        </MediaQuery>

        {/* mobile  */}
        <MediaQuery maxDeviceWidth={500}>
          <div className="flex music-mobile">
            <LazyLoadImage effect="opacity" src={indulgentCover} className="music-cover" height={getHeight(indulgentCover)} />
            <div className="cover-title" >No Drive Will Take Me Home</div>
            <div className="cover-artist" >Indulgent</div>
            <div className="cover-buttons flex">
              <Button variant="outline-dark"><a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=wxw93aEFTfGDUXMgTjEzsg" target="_blank">SPOTIFY</a></Button>
              <Button variant="outline-dark"><a href="https://music.apple.com/us/album/no-drive-will-take-me-home/1429049796" target="_blank">APPLE MUSIC</a></Button>
              <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Indulgent_No_Drive_Will_Take_Me_Home?id=Bcwfm3gxejnt5fvkv2hlhxgxdei" target="_blank">GOOGLE PLAY</a>
              </Button>
            </div>
            <div className="cover-extra">
              <div>Guitar/Drums/Vocals/Bass performed by Abhi Velaga</div>
              <div>Released 2018</div>
            </div>
          </div>
        </MediaQuery>

        {/* sd  */}
        <div className="parallax">
          <img src={sd1} className="parallax-img" />
          <div className="parallax-title-white">SHIVERING DEMONS</div>
        </div>

        <YouTube videoId="gE3zPWgq4Ro" className="youtube" />

        {/* mjf  */}
        <div className="parallax">
          <img src={mjf} className="parallax-img" />
          <div className="parallax-title-white">MERRY JANE & THE FONDAS</div>
        </div>

        {/* desktop  */}
        <MediaQuery minDeviceWidth={500}>
          <div className="flex mjf-info">
            <div className="mjf-description">
             As the drummer for Merry Jane & The Fondas, I recorded a <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">studio EP</a> that was produced by Jackie Venson and played an <a href="https://schedule.sxsw.com/2019/artists/2008465">official SXSW showcase</a>.
          </div>
            <LazyLoadImage effect="opacity" src={mjfStudio} className="mjf-studio" height={getHeight(mjfStudio)} />
          </div>
          <div className="flex cover-container">
            <LazyLoadImage effect="opacity" src={mjfCover} className="music-cover" height={getHeight(mjfCover)} />
            <div className="mjf-cover-info" >
              <div className="cover-title" >Pulls You Under</div>
              <div className="cover-artist" >Merry Jane & The Fondas</div>
              <div className="mjf-buttons cover-buttons flex">
                <Button variant="outline-dark"><a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw" target="_blank">SPOTIFY</a></Button>
                <Button variant="outline-dark"><a href="https://music.apple.com/us/album/pulls-you-under-ep/1454982478" target="_blank">APPLE MUSIC</a></Button>
                <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Merry_Jane_the_Fondas_Pulls_You_Under?id=Bbp7z4p3isxbxsqv4oymqx7ndt4" target="_blank">GOOGLE PLAY</a></Button>
              </div>
              <div>Guitar/Vocals - Ally Brown</div>
              <div>Lead Guitar/Backing Vocals - Serenity Autumn</div>
              <div>Bass - Johnny Young</div>
              <div>Drums - Abhi Velaga</div>
              <div>Produced by Jackie Venson</div>
              <br/>
              <div>Released 2019</div>
            </div>
          </div>
        </MediaQuery>

        {/* mobile  */}
        <MediaQuery maxDeviceWidth={500}>
          <div className="flex music-mobile">
            <div className="mjf-description">
            As the drummer for Merry Jane & The Fondas from 2018 to 2019, I recorded a <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">studio EP</a> with renowned guitarist and songwriter, <a href="https://en.wikipedia.org/wiki/Jackie_Venson">Jackie Venson</a>, and also played an <a href="https://schedule.sxsw.com/2019/artists/2008465">official SXSW showcase</a>.
          </div>
            <LazyLoadImage effect="opacity" src={mjfStudio} className="mjf-studio" height={getHeight(mjfStudio)} />
            <LazyLoadImage effect="opacity" src={mjfCover} className="music-cover" height={getHeight(mjfCover)} />
            <div className="cover-title" >Pulls You Under</div>
            <div className="cover-artist" >Merry Jane & The Fondas</div>
            <div className="cover-buttons flex">
              <Button variant="outline-dark"><a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw" target="_blank">SPOTIFY</a></Button>
              <Button variant="outline-dark"><a href="https://music.apple.com/us/album/pulls-you-under-ep/1454982478" target="_blank">APPLE MUSIC</a></Button>
              <Button variant="outline-dark"><a href="https://play.google.com/store/music/album/Merry_Jane_the_Fondas_Pulls_You_Under?id=Bbp7z4p3isxbxsqv4oymqx7ndt4" target="_blank">GOOGLE PLAY</a></Button>
            </div>
            <div className="cover-extra">
              <div>Guitar/Vocals - Allyb</div>
              <div>Lead Guitar/Backing Vocals - Serenity Autumn</div>
              <div>Bass - Johnny Young</div>
              <div>Drums - Abhi Velaga</div>
              <div>Produced by Jackie Venson</div>
              <div>Released 2019</div>
            </div>
          </div>
        </MediaQuery>

        <YouTube videoId="XXMGt_N6Mc0" className="youtube" />
      </div>
  </div>
  );
};