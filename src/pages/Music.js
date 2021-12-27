import React from "react";
import Button from 'react-bootstrap/Button';
import MediaQuery from 'react-responsive';
import Navbar from '../layout/Navbar';
import YouTube from 'react-youtube';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import './pages.scss';

import drums from '../../dist/images/music/indulgent/drums.jpg';
import guitar1 from '../../dist/images/music/indulgent/guitar1.jpg';
import guitar2 from '../../dist/images/music/indulgent/guitar2.jpg';
import indulgentCover from '../../dist/images/music/indulgent/cover.jpg';

import mjf from '../../dist/images/music/mjf/mjf.jpg';
import mjfStudio from '../../dist/images/music/mjf/studio.jpg';
import mjfCover from '../../dist/images/music/mjf/cover.jpg';

import cg from '../../dist/images/music/cg/cg.jpg';
import cgCover from '../../dist/images/music/cg/cover.jpg';
import jason from '../../dist/images/music/cg/6.jpg';

export default function Music() {

  const getHeight = function(image) {
    var img = new Image();
    img.onload = function () {
      return this.height;
    }
    img.src = image;
  }

  return <div>
    <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={false} /></MediaQuery>
    <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={true} /></MediaQuery>
    <div className="page">
      <div className="appear">

        <div className="software-intro">
          Music is my first passion. I started learning guitar when I was 9. I then began to teach myself, starting with bass at 13, audio production and drums at 14, and vocals at 15. I wrote, recorded, produced, and released <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl">my first album</a> independently, all at the age of 16. Before graduating high school, I recorded <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=lYoQ-F2RQtict5KQQDMN4g">my second album</a> in a studio and released that at the age of 18.
        </div>

        {/* indulgent  */}
        {/* desktop  */}
        <MediaQuery minDeviceWidth={500}>
          <div className="indulgent back-img">
            <div className="indulgent-title">INDULGENT</div>
          </div>
        </MediaQuery>

        {/* mobile  */}
        <MediaQuery maxDeviceWidth={500}>
          <LazyLoadImage effect="opacity" src={drums} width="100%" height={getHeight(drums)} className="mobile-banner" />
          <div className="indulgent-title">INDULGENT</div>
        </MediaQuery>


        <div className="indulgent-grid" >
          <LazyLoadImage effect="opacity" src={guitar1} className="indulgent-grid-img" width="100%" height={getHeight(drums)} />
          <LazyLoadImage effect="opacity" src={guitar2} className="indulgent-grid-img" width="100%" height={getHeight(drums)} />
          <div className="flex indulgent-grid-text">
            <div className="music-text">
              I release my solo music under the moniker Indulgent. I perform all the instruments (guitar, drums, bass) and vocals on the recordings. I recorded my first album, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">Toxic</a>, by myself in my bedroom and released it in 2015. My follow up, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">No Drive Will Take Me Home</a>, was recorded in a studio and released in 2018. I'm currently writing my third album scheduled for release in 2020.
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
              <div>Guitar/Drums/Vocals/Bass performed by Abhi Velaga</div>
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

        {/* mjf  */}
        <div className="mjf back-img" />
        <LazyLoadImage effect="opacity" src={mjf} width="100%" height={getHeight(mjf)} className="mobile-banner" />
        <div className="mjf-title">MERRY JANE & THE FONDAS</div>

        {/* desktop  */}
        <MediaQuery minDeviceWidth={500}>
          <div className="flex mjf-info">
            <div className="mjf-description">
             As the drummer for Merry Jane & The Fondas from 2018 to 2019, I recorded a <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">studio EP</a> with renowned guitarist and songwriter, <a href="https://en.wikipedia.org/wiki/Jackie_Venson">Jackie Venson</a>, and also played an <a href="https://schedule.sxsw.com/2019/artists/2008465">official SXSW showcase</a>.
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
              <div>Guitar/Vocals - Allyb</div>
              <div>Lead Guitar/Backing Vocals - Serenity Autumn</div>
              <div>Bass - Johnny Young</div>
              <div>Drums - Abhi Velaga</div>
              <div>Produced by Jackie Venson</div>
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

        {/* cg  */}
        <div className="cg back-img" />
        <LazyLoadImage effect="opacity" src={cg} width="100%" height={getHeight(cg)} className="mobile-banner" />
        <div className="mjf-title">CREAM GENIE</div>

        {/* desktop  */}
        <MediaQuery minDeviceWidth={500}>
          <div className="flex mjf-info">
            <LazyLoadImage effect="opacity" src={jason} className="mjf-studio" height={getHeight(jason)} />
            <div className="cg-description">
              I drummed in the jam rock duo Cream Genie from 2016 to 2017. During that time we released a <a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos">demo</a> and played multiple shows across the DFW metroplex.
          </div>
          </div>
          <div className="flex cover-container">
            <div className="indulgent-cover-info" >
              <div className="cover-title" >Cream Genie 2016 Demos</div>
              <div className="cover-artist" >Cream Genie</div>
              <div className="cover-buttons"><Button variant="outline-dark"><a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos" target="_blank">SOUNDCLOUD</a></Button></div>
              <div>Guitar - Jason Swan</div>
              <div>Drums - Abhi Velaga</div>
            </div>
            <LazyLoadImage effect="opacity" src={cgCover} className="music-cover" height={getHeight(cgCover)} />
          </div>
        </MediaQuery>

        {/* mobile  */}
        <MediaQuery maxDeviceWidth={500}>
          <div className="flex mjf-info">
            <div className="cg-description">
            I drummed in the jam rock duo Cream Genie from 2016 to 2017. During that time we released a <a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos">demo</a> and played multiple shows across the DFW metroplex.
          </div>
            <LazyLoadImage effect="opacity" src={jason} className="mjf-studio" height={getHeight(jason)} />
            <LazyLoadImage effect="opacity" src={cgCover} className="music-cover" height={getHeight(cgCover)} />
            <div className="cover-title" >Cream Genie 2016 Demos</div>
            <div className="cover-artist" >Cream Genie</div>
            <div className="cover-buttons flex">
              <Button variant="outline-dark"><a href="https://soundcloud.com/sunburstbox/sets/cream-genie-demos" target="_blank">SOUNDCLOUD</a></Button>
            </div>
            <div className="cover-extra">
              <div>Guitar - Jason Swan</div>
              <div>Drums - Abhi Velaga</div>
            </div>
          </div>
        </MediaQuery>
        <YouTube videoId="19hlSPVXDjo" className="youtube" />
      </div>
    </div>
  </div>;
};