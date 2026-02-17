'use client';

import React from "react";
import Navbar from '../components/Navbar';
import MediaQuery from 'react-responsive';
import { indulgentReleases } from '../data/musicImports.js';

export default function Music() {
    return <div className="page">
        <MediaQuery minDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={false} /></MediaQuery>
        <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"MUSIC"} mobile={true} /></MediaQuery>
        <h1 className="title">INDULGENT</h1>
        <div className="section-subtitle">guitar, vocals, drums, bass</div>
        <div className="section-year">2015 - present</div>
        <img src="/images/music/indulgent/indulgentlive.webp" alt="indulgent performing on stage" className="music-full" loading="lazy" />
        <div className="music-description">I perform all vocals, drums, guitars, and bass myself for my solo project, Indulgent, and released my recent album, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">No Drive Will Take Me Home</a>, in 2018 and my debut album, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">Toxic</a>, in 2015.</div>
        <img src="/images/music/indulgent/guitar1.webp" alt="recording guitar in studio" className="half-left" loading="lazy" />
        <img src="/images/music/indulgent/guitar2.webp" alt="recording guitar in studio 2" className="half-right" loading="lazy" />
        <div className="music-releases">
            {indulgentReleases.map((releaseObj, idx) =>
                <div className="music-release" key={idx}>
                    <a href={releaseObj.link} target="blank">
                        <img src={releaseObj.cover} alt={releaseObj.alt} className="music-cover" loading="lazy"  />
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
        <img src="/images/music/caladan/caladan.webp" alt="caladan performing live" className="music-full" loading="lazy" />
        <div className="music-video">
            <iframe loading="lazy" className="youtube-half-left" src="https://www.youtube.com/embed/VQsZdVG8A8I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            hole in the wall <br />
            1.7.23
        </div>
        <div className="music-video">
            <iframe loading="lazy" className="youtube-half-right" src="https://www.youtube.com/embed/hQgL_IebL_s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            woodshed <br /> 12.17.22
        </div>
        <img src="/images/music/caladan/group.webp" alt="caladan portrait" className="music-full" loading="lazy" />

        <div className="line" />

        <div className="title">SHIVERING DEMONS</div>
        <div className="section-subtitle">drums</div>
        <div className="section-year">2022 - 2023</div>
        <img src="/images/music/sd/sd1.webp" alt="shivering demons performing live" className="music-full" loading="lazy" />
        <img src="/images/music/sd/fallingKid.webp" alt="shivering demons performing at house party" className="music-half" loading="lazy" />
        <div className="music-video">
            <iframe loading="lazy" className="youtube-half-right" src="https://www.youtube.com/embed/1ap9ObDNqAU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            far out lounge <br />  1.13.23
        </div>
        <div className="music-video">
            <iframe loading="lazy" className="youtube-half-left" src="https://www.youtube.com/embed/08FnNPD-Eng" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            11.11.22 <br /> rio market
        </div>
        <div className="music-video">
            <iframe loading="lazy" className="youtube-half-right" src="https://www.youtube.com/embed/6mEqHssj27Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            pearl st. co-op <br /> 10.28.22
        </div>

        <div className="line" />

        <div className="title">MERRY JANE &amp; THE FONDAS</div>
        <div className="section-subtitle">drums</div>
        <div className="section-year">2018 - 2019</div>
        <img src="/images/music/mjf/mjf.webp" alt="merry jane & the fondas portrait" className="music-full" loading="lazy" />
        <div className="music-description">
            As the drummer for Merry Jane &amp; The Fondas from 2018 to 2019, I recorded a <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">studio EP</a> with renowned guitarist and songwriter, Jackie Venson, and also played an <a href="https://schedule.sxsw.com/2019/artists/2008465">official SXSW showcase</a>.
        </div>
        <img src="/images/music/mjf/studio.webp" alt="merry jane & the fondas recording with jackie venson" className="music-full" loading="lazy" />
        <div className="music-video-full">
            <iframe loading="lazy" className="youtube-full" src="https://www.youtube.com/embed/XXMGt_N6Mc0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            porchfire fest SXSW <br />  3.10.19
        </div>
        <div className="music-releases">
            <div className="music-release">
                <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw" target="blank">
                    <img src="/images/music/mjf/cover.webp" className="music-cover" loading="lazy" alt="pulls you under album cover" />
                    Pulls You Under
                    <br />
                    2019
                </a>
            </div>
        </div>
    </div>;
}
