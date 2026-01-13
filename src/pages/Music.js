import React from "react";
import Navbar from '../layout/Navbar';
import YouTube from 'react-youtube';
import './pages.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MediaQuery from 'react-responsive';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import drums from '../../dist/images/music/indulgent/drums.jpg';
import guitar1 from '../../dist/images/music/indulgent/guitar1.jpg';
import guitar2 from '../../dist/images/music/indulgent/guitar2.jpg';
import mebed from '../../dist/images/music/indulgent/mebed.jpg';
import indulgentlive from '../../dist/images/music/indulgent/indulgentlive.jpg';
import { indulgentReleases } from './musicImports.js';

import caladan from '../../dist/images/music/caladan/caladan.jpg';
import caladanGroup from '../../dist/images/music/caladan/group.jpg';

import mjf from '../../dist/images/music/mjf/mjf.jpg';
import mjfStudio from '../../dist/images/music/mjf/studio.jpg';
import mjfCover from '../../dist/images/music/mjf/cover.jpg';

import sd1 from '../../dist/images/music/sd/sd1.jpg';
import sd2 from '../../dist/images/music/sd/sd2.jpg';
import fallingKid from '../../dist/images/music/sd/fallingKid.jpg';


export default function Music() {
    return <div className="page">
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={true} /></MediaQuery>
        <div className="title">INDULGENT</div>
        <div className="section-subtitle">guitar, vocals, drums, bass</div>
        <div className="section-year">2015 - present</div>
        <img src={indulgentlive} className="music-full" />
        <div className="music-description">I perform all vocals, drums, guitars, and bass myself for my solo project, Indulgent, and released my recent album, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">No Drive Will Take Me Home</a>, in 2018 and my debut album, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">Toxic</a>, in 2015.</div>
        <img src={guitar1} className="half-left" />
        <img src={guitar2} className="half-right" />
        <div className="music-releases">
            {indulgentReleases.map((releaseObj) =>
                <div className="music-release">
                    <a href={releaseObj.link}>
                        <img src={releaseObj.cover} className="music-cover" />
                        {releaseObj.title}
                        <br />
                        {releaseObj.year}
                    </a>
                </div>
            )}
        </div>
        <div className="line" />

        <div className="title">CALADAN</div>
        <div className="section-subtitle">drums</div>
        <div className="section-year">2022 - 2023</div>
        <img src={caladan} className="music-full" />
        {/* <div className="music-description">WHAT DO I SAY ABOUT CALDAN</div> */}
        <div className="music-video">
            <YouTube videoId="VQsZdVG8A8I" className="youtube-half-left" />
            hole in the wall <br />
            1.7.23
        </div>
        <div className="music-video">
            <YouTube videoId="hQgL_IebL_s" className="youtube-half-right" />
            woodshed <br /> 12.17.22
        </div>
        <img src={caladanGroup} className="music-full" />

        <div className="line" />

        <div className="title">SHIVERING DEMONS</div>
        <div className="section-subtitle">drums</div>
        <div className="section-year">2022 - 2023</div>
        <img src={sd1} className="music-full" />
        {/* <div className="music-description">WHAT DO I SAY ABOUT SHIVERING DMEONSSS, dont forget i have more assets to compress that i could use in Desktop/compressed assets</div> */}
        <img src={fallingKid} className="music-half" />
        <div className="music-video">
            <YouTube videoId="1ap9ObDNqAU" className="youtube-half-right" />
            far out lounge <br />  1.13.23
        </div>
        <div className="music-video">
            <YouTube videoId="08FnNPD-Eng" className="youtube-half-left" />
            11.11.22 <br /> rio market
        </div>
        <div className="music-video">
            <YouTube videoId="6mEqHssj27Y" className="youtube-half-right" />
            pearl st. co-op <br /> 10.28.22
        </div>

        <div className="line" />

        <div className="title">MERRY JANE & THE FONDAS</div>
        <div className="section-subtitle">drums</div>
        <div className="section-year">2018 - 2019</div>
        <img src={mjf} className="music-full" />
        <div className="music-description">
            As the drummer for Merry Jane & The Fondas from 2018 to 2019, I recorded a <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">studio EP</a> with renowned guitarist and songwriter, Jackie Venson, and also played an <a href="https://schedule.sxsw.com/2019/artists/2008465">official SXSW showcase</a>.
        </div>
        <img src={mjfStudio} className="music-full" />
        <div className="music-video-full">
            <YouTube videoId="XXMGt_N6Mc0" className="youtube-full" />
            porchfire fest SXSW <br />  3.10.19
        </div>
        <div className="music-releases">
            <div className="music-release">
                <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">
                    <img src={mjfCover} className="music-cover" />
                    Pulls You Under
                    <br />
                    2019
                </a>
            </div>
        </div>
    </div>
}