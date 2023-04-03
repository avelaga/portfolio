import React from "react";
import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../Navbar';
import YouTube from 'react-youtube';
import styles from '../../styles/Pages.module.scss'

import drums from '../../public/images/music/indulgent/drums.jpg';
import guitar1 from '../../public/images/music/indulgent/guitar1.jpg';
import guitar2 from '../../public/images/music/indulgent/guitar2.jpg';
import mebed from '../../public/images/music/indulgent/mebed.jpg';
import { indulgentReleases } from './musicImports.js';

import caladan from '../../public/images/music/caladan/caladan.jpg';
import caladanGroup from '../../public/images/music/caladan/group.jpg';

import mjf from '../../public/images/music/mjf/mjf.jpg';
import mjfStudio from '../../public/images/music/mjf/studio.jpg';
import mjfCover from '../../public/images/music/mjf/cover.jpg';

import sd1 from '../../public/images/music/sd/sd1.jpg';
import sd2 from '../../public/images/music/sd/sd2.jpg';
import fallingKid from '../../public/images/music/sd/fallingKid.jpg';


export default function Music() {
    return <>
        <Head>
            <title>Abhi Velaga - Music</title>
            <meta property="og:title" content="Abhi Velaga - Music" />
            {/* TODO: change photos for each page */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
            <link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" />
            <meta charset="UTF-8" />
            <meta property="og:image" content="images/home/room.jpg" />
            <meta property="og:site_name" content="Software Developer, Musician, Artist" />
            <meta property="og:description" content="Software Developer, Musician, Artist" />
            <meta property="og:url" content="https://abhi.work" />
            <meta name="description" content="Software Developer, Musician, Artist" />
            <meta name="keywords" content="Abhinav Velaga, UT Austin, Indulgent, Raspberry Pi, Rock Music, Film Photography, Electronics, Arduino, Art, Kodak, Portra, Nikon, Bronica, KVRX, Computer Science, Developer, Shivering Demons, Caladan, SXSW" />
            <meta name="author" content="Abhi Velaga" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content="Software Developer, Musician, Artist" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-165347174-1"></script>

            {/* TODO: verify this is thew correct syntax for adding analytics in Next */}
            {/* <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments) }
        gtag('js', new Date());
        gtag('config', 'UA-165347174-1');
      </script> */}
            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.min.js" />
        </Head>
        <div className={styles.page}>
            <Navbar activeLink={"MUSIC"} />
            <div className={styles.title}>INDULGENT</div>
            <div className={styles.section_subtitle}>guitar, vocals, drums, bass</div>
            <div className={styles.section_year}>2015 - present</div>
            {/* TODO: is there a better, automatic way to get width and height? */}
            <Image src={mebed} className={styles.music_full}/>
            <div className={styles.music_description}>I perform all vocals, drums, guitars, and bass myself for my solo project, Indulgent, and released my recent album, <a href="https://open.spotify.com/album/2d7c0N7uNdi3jfdsTWeZNV?si=K98wvkQmQd6uMvHFrQt2ng">No Drive Will Take Me Home</a>, in 2018 and my debut album, <a href="https://open.spotify.com/album/67RH1N86fW4hIA10m3DhFl?si=Hl4dag6_QhSyX3f4Zv0mhg">Toxic</a>, in 2015.</div>
            <Image src={guitar1} className={styles.half_left} />
            <Image src={guitar2} className={styles.half_right} />
            <div className={styles.music_releases}>
                {indulgentReleases.map((releaseObj) =>
                    <div className={styles.music_release}>
                        <a href={releaseObj.link}>
                            <Image src={releaseObj.cover} className={styles.music_cover} />
                            {releaseObj.title}
                            <br />
                            {releaseObj.year}
                        </a>
                    </div>
                )}
            </div>
            <div className={styles.line} />

            <div className={styles.title}>CALADAN</div>
            <div className={styles.section_subtitle}>drums</div>
            <div className={styles.section_year}>2022 - present</div>
            <Image src={caladan} className={styles.music_full} />
            <div className={styles.music_description}>WHAT DO I SAY ABOUT CALDAN</div>
            <div className={styles.music_video}>
                <YouTube videoId="VQsZdVG8A8I" className={styles.youtube_half_left} />
                hole in the wall <br />
                1.7.23
            </div>
            <div className={styles.music_video}>
                <YouTube videoId="hQgL_IebL_s" className={styles.youtube_half_right} />
                woodshed <br /> 12.17.22
            </div>
            <Image src={caladanGroup} className={styles.music_full}  />

            <div className={styles.line} />

            <div className={styles.title}>SHIVERING DEMONS</div>
            <div className={styles.section_subtitle}>drums</div>
            <div className={styles.section_year}>2022 - 2023</div>
            <Image src={sd1} className={styles.music_full} />
            <div className={styles.music_description}>WHAT DO I SAY ABOUT SHIVERING DMEONSSS, dont forget i have more assets to compress that i could use in Desktop/compressed assets</div>
            <Image src={fallingKid} className={styles.music_half} />
            <div className={styles.music_video}>
                <YouTube videoId="1ap9ObDNqAU" className={styles.youtube_half_right} />
                far out lounge <br />  1.13.23
            </div>
            <div className={styles.music_video}>
                <YouTube videoId="08FnNPD-Eng" className={styles.youtube_half_left} />
                11.11.22 <br /> rio market
            </div>
            <div className={styles.music_video}>
                <YouTube videoId="6mEqHssj27Y" className={styles.youtube_half_right} />
                pearl st. co-op <br /> 10.28.22
            </div>

            <div className={styles.line} />

            <div className={styles.title}>MERRY JANE & THE FONDAS</div>
            <div className={styles.section_subtitle}>drums</div>
            <div className={styles.section_year}>2018 - 2019</div>
            <Image src={mjf} className={styles.music_full} />
            <div className={styles.music_description}>
                As the drummer for Merry Jane & The Fondas from 2018 to 2019, I recorded a <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">studio EP</a> with renowned guitarist and songwriter, Jackie Venson, and also played an <a href="https://schedule.sxsw.com/2019/artists/2008465">official SXSW showcase</a>.
            </div>
            <Image src={mjfStudio} className={styles.music_full} />
            <div className={styles.music_video_full}>
                <YouTube videoId="XXMGt_N6Mc0" className={styles.youtube_full} />
                porchfire fest SXSW <br />  3.10.19
            </div>
            <div className={styles.music_releases}>
                <div className={styles.music_release}>
                    <a href="https://open.spotify.com/album/097Hlqmh6mqEv6GJbxf61L?si=NO5UrK5mTlymBRe4vKErNw">
                        <Image src={mjfCover} className={styles.music_cover} />
                        Pulls You Under
                        <br />
                        2019
                    </a>
                </div>
            </div>
        </div>
    </>
}