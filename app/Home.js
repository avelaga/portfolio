'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Link from 'next/link';
import FadeInOnLoad from './components/FadeInOnLoad';

const projects = [
    {
    cover: "/images/rebuildthumbsq.webp",
    width: 2000, height: 1125,
    title: "totaled car rebuild",
    medium: "youtube series",
    year: "2025",
    link: "https://youtu.be/_lGyHqbhK-A?si=eCnqV4fGK9G9aiFj",
    alt: "totaled car rebuild thumbnail"
  },,
  {
    cover: "/images/software/dadalab/dadalab4.webp",
    width: 1080, height: 1080,
    title: "the world misses you",
    medium: "led installation",
    year: "2021",
    link: "/software",
    alt: "the world misses you installation"
  },
  {
    cover: "/images/photos/miami/miami1.webp",
    width: 2000, height: 1565,
    title: "miami vice cocaine dream",
    medium: "photo series",
    year: "2018 - 2019",
    link: "/miamivice",
    alt: "miami vice cocaine dream photo collection"
  },
  {
    cover: "/images/music/indulgent/rebound.webp",
    width: 1000, height: 1000,
    title: "rebound - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/6JTaf4T4GYIWPRbBioJnWu?si=47ae2a1a35b9475e",
    alt: "rebound by indulgent album cover"
  },
  {
    cover: "/images/music/indulgent/noOneKnows1.webp",
    width: 1000, height: 1000,
    title: "no one knows - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/584ATM5plnkdi60rd6Ns42?si=fdb42d68f3fe4564",
    alt: "no one knows by indulgent album cover"
  },
  {
    cover: "/images/photos/uservoid/uservoid1.webp",
    width: 1545, height: 2000,
    title: "user void",
    medium: "photo series",
    year: "2019",
    link: "/uservoid",
    alt: "user void photo collection"
  },
];

export default function Home() {
  useEffect(() => {
    console.log(" _____                                   \r\n|_   _|                                  \r\n  | |                                    \r\n  | |                                    \r\n _| |_                                   \r\n \\___\/                                   \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n ___  ___  ___                           \r\n\/ __|\/ _ \\\/ _ \\                          \r\n\\__ \\  __\/  __\/                          \r\n|___\/\\___|\\___|                          \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n _   _  ___  _   _                       \r\n| | | |\/ _ \\| | | |                      \r\n| |_| | (_) | |_| |                      \r\n \\__, |\\___\/ \\__,_|                      \r\n  __\/ |                                  \r\n |___\/                                   \r\n                      _    _             \r\n                     | |  (_)            \r\n ___ _ __   ___  __ _| | ___ _ __   __ _ \r\n\/ __| \'_ \\ \/ _ \\\/ _` | |\/ \/ | \'_ \\ \/ _` |\r\n\\__ \\ | | |  __\/ (_| |   <| | | | | (_| |\r\n|___\/_| |_|\\___|\\__,_|_|\\_\\_|_| |_|\\__, |\r\n                                    __\/ |\r\n                                   |___\/ \r\n _                                       \r\n(_)                                      \r\n _ _ __                                  \r\n| | \'_ \\                                 \r\n| | | | |                                \r\n|_|_| |_|                                \r\n                                         \r\n                                         \r\n _   _                                   \r\n| | | |                                  \r\n| |_| |__   ___                          \r\n| __| \'_ \\ \/ _ \\                         \r\n| |_| | | |  __\/                         \r\n \\__|_| |_|\\___|                         \r\n                                         \r\n                                         \r\n                           _             \r\n                          | |            \r\n  ___ ___  _ __  ___  ___ | | ___        \r\n \/ __\/ _ \\| \'_ \\\/ __|\/ _ \\| |\/ _ \\       \r\n| (_| (_) | | | \\__ \\ (_) | |  __\/       \r\n \\___\\___\/|_| |_|___\/\\___\/|_|\\___|       \r\n                                         \r\n                                         \r\n  ______                                 \r\n _|  _  \\                                \r\n(_) | | |                                \r\n  | | | |                                \r\n _| |\/ \/                                 \r\n(_)___\/                                  \r\n                                         \r\n                                         ");
  });

  return (
    <div className="page">
      <Navbar activeLink={"HOME"} />
      <div className='home-title'>hi, i'm abhi - a musician, interdisciplinary creator, and <blue><a href="/resume" className="home-resume">software developer</a></blue></div>
       <div className="line" />
      <h1 className='title featured'>featured work</h1>
      <div className='project-container'>
        {projects.map((project, idx) => project ? (
          <a href={project.link} key={idx}>
            <div className='home-project'>
              <FadeInOnLoad src={project.cover} alt={project.alt} cls='project-img' width={project.width} height={project.height} />
              <div className='project-title'>{project.title}</div>
              <div className='project-medium'>{project.medium}</div>
              <div className='project-year'>{project.year}</div>
            </div>
          </a>
        ) : null)}
      </div>
    </div>
  );
}
