import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Navbar from './Navbar';
// import worldMissesYou from '../../dist/images/software/dadalab/dadalab4.jpg';
// import breakMyFall from '../../dist/images/music/indulgent/breakMyFall.jpg';
// import noOneKnows from '../../dist/images/music/indulgent/noOneKnows.jpg';
// import rebound from '../../dist/images/music/indulgent/rebound.jpg';
// import miami1 from '../../dist/images/photos/miami/miami1.jpg';
// import uservoid1 from '../../dist/images/photos/uservoid/uservoid1.jpg';

const projects = [
  {
    cover: "/images/software/dadalab/dadalab4.jpg",
    title: "the world misses you",
    medium: "led installation",
    year: "2021",
    link: "/software"
  },
  {
    cover: "/images/software/dadalab/dadalab4.jpg",
    title: "miami vice cocaine dream",
    medium: "photo series",
    year: "2018 - 2019",
    link: "/miamivice"
  },
  {
    cover: "/images/software/dadalab/dadalab4.jpg",
    title: "rebound - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/6JTaf4T4GYIWPRbBioJnWu?si=47ae2a1a35b9475e"
  },
  {
    cover: "/images/software/dadalab/dadalab4.jpg",
    title: "no one knows - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/584ATM5plnkdi60rd6Ns42?si=fdb42d68f3fe4564"
  },
  {
    cover: "/images/software/dadalab/dadalab4.jpg",
    title: "break my fall - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/6FRTGOjhRkiJVDBRz5CWWt?si=0c305147687d436f"
  },
  {
    cover: "/images/software/dadalab/dadalab4.jpg",
    title: "user void",
    medium: "photo series",
    year: "2019",
    link: "/uservoid"
  },
]


export default function Home() {
  // easter egg :)
  useEffect(() => {
    console.log(" _____                                   \r\n|_   _|                                  \r\n  | |                                    \r\n  | |                                    \r\n _| |_                                   \r\n \\___\/                                   \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n ___  ___  ___                           \r\n\/ __|\/ _ \\\/ _ \\                          \r\n\\__ \\  __\/  __\/                          \r\n|___\/\\___|\\___|                          \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n _   _  ___  _   _                       \r\n| | | |\/ _ \\| | | |                      \r\n| |_| | (_) | |_| |                      \r\n \\__, |\\___\/ \\__,_|                      \r\n  __\/ |                                  \r\n |___\/                                   \r\n                      _    _             \r\n                     | |  (_)            \r\n ___ _ __   ___  __ _| | ___ _ __   __ _ \r\n\/ __| \'_ \\ \/ _ \\\/ _` | |\/ \/ | \'_ \\ \/ _` |\r\n\\__ \\ | | |  __\/ (_| |   <| | | | | (_| |\r\n|___\/_| |_|\\___|\\__,_|_|\\_\\_|_| |_|\\__, |\r\n                                    __\/ |\r\n                                   |___\/ \r\n _                                       \r\n(_)                                      \r\n _ _ __                                  \r\n| | \'_ \\                                 \r\n| | | | |                                \r\n|_|_| |_|                                \r\n                                         \r\n                                         \r\n _   _                                   \r\n| | | |                                  \r\n| |_| |__   ___                          \r\n| __| \'_ \\ \/ _ \\                         \r\n| |_| | | |  __\/                         \r\n \\__|_| |_|\\___|                         \r\n                                         \r\n                                         \r\n                           _             \r\n                          | |            \r\n  ___ ___  _ __  ___  ___ | | ___        \r\n \/ __\/ _ \\| \'_ \\\/ __|\/ _ \\| |\/ _ \\       \r\n| (_| (_) | | | \\__ \\ (_) | |  __\/       \r\n \\___\\___\/|_| |_|___\/\\___\/|_|\\___|       \r\n                                         \r\n                                         \r\n  ______                                 \r\n _|  _  \\                                \r\n(_) | | |                                \r\n  | | | |                                \r\n _| |\/ \/                                 \r\n(_)___\/                                  \r\n                                         \r\n                                         ");
  });

  return (
    <>
      <Head>
        <title>Abhi Velaga</title>
        <meta property="og:title" content="Abhi Velaga" />

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
      <div className="page">
        <Navbar activeLink={"HOME"} />
        <div className='home-title'>hi, i'm abhi - i make <a href="/music"><blue>music</blue></a>, <a href="/portfolio"><red>photos</red></a>, and <a href="/software"><green>transmedia art</green></a></div>
        <div className="line" />
        <div className='title'>featured work</div>
        <div className='project-container'>
          {projects.map((project) =>
            <a href={project.link}>
              <div className='home-project'>
                <Image src={project.cover} className='project-img' width={300} height={300} />
                <div className='project-title'>{project.title}</div>
                <div className='project-medium'>{project.medium}</div>
                <div className='project-year'>{project.year}</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </>
  )
}