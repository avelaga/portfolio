'use client';

import React, { useEffect } from 'react';
import Navbar from '../src/components/Navbar';
import MediaQuery from 'react-responsive';
import Link from 'next/link';

const projects = [
    {
    cover: "/images/rebuildthumbsq.jpg",
    title: "totaled car rebuild",
    medium: "youtube series",
    year: "2025",
    link: "https://youtu.be/_lGyHqbhK-A?si=eCnqV4fGK9G9aiFj"
  },,
  {
    cover: "/images/software/dadalab/dadalab4.jpg",
    title: "the world misses you",
    medium: "led installation",
    year: "2021",
    link: "/software"
  },
  {
    cover: "/images/photos/miami/miami1.jpg",
    title: "miami vice cocaine dream",
    medium: "photo series",
    year: "2018 - 2019",
    link: "/miamivice"
  },
  {
    cover: "/images/music/indulgent/rebound.jpg",
    title: "rebound - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/6JTaf4T4GYIWPRbBioJnWu?si=47ae2a1a35b9475e"
  },
  {
    cover: "/images/music/indulgent/noOneKnows1.jpg",
    title: "no one knows - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/584ATM5plnkdi60rd6Ns42?si=fdb42d68f3fe4564"
  },
  {
    cover: "/images/photos/uservoid/uservoid1.jpg",
    title: "user void",
    medium: "photo series",
    year: "2019",
    link: "/uservoid"
  },
];

export default function Home() {
  useEffect(() => {
    console.log(" _____                                   \r\n|_   _|                                  \r\n  | |                                    \r\n  | |                                    \r\n _| |_                                   \r\n \\___\/                                   \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n ___  ___  ___                           \r\n\/ __|\/ _ \\\/ _ \\                          \r\n\\__ \\  __\/  __\/                          \r\n|___\/\\___|\\___|                          \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n _   _  ___  _   _                       \r\n| | | |\/ _ \\| | | |                      \r\n| |_| | (_) | |_| |                      \r\n \\__, |\\___\/ \\__,_|                      \r\n  __\/ |                                  \r\n |___\/                                   \r\n                      _    _             \r\n                     | |  (_)            \r\n ___ _ __   ___  __ _| | ___ _ __   __ _ \r\n\/ __| \'_ \\ \/ _ \\\/ _` | |\/ \/ | \'_ \\ \/ _` |\r\n\\__ \\ | | |  __\/ (_| |   <| | | | | (_| |\r\n|___\/_| |_|\\___|\\__,_|_|\\_\\_|_| |_|\\__, |\r\n                                    __\/ |\r\n                                   |___\/ \r\n _                                       \r\n(_)                                      \r\n _ _ __                                  \r\n| | \'_ \\                                 \r\n| | | | |                                \r\n|_|_| |_|                                \r\n                                         \r\n                                         \r\n _   _                                   \r\n| | | |                                  \r\n| |_| |__   ___                          \r\n| __| \'_ \\ \/ _ \\                         \r\n| |_| | | |  __\/                         \r\n \\__|_| |_|\\___|                         \r\n                                         \r\n                                         \r\n                           _             \r\n                          | |            \r\n  ___ ___  _ __  ___  ___ | | ___        \r\n \/ __\/ _ \\| \'_ \\\/ __|\/ _ \\| |\/ _ \\       \r\n| (_| (_) | | | \\__ \\ (_) | |  __\/       \r\n \\___\\___\/|_| |_|___\/\\___\/|_|\\___|       \r\n                                         \r\n                                         \r\n  ______                                 \r\n _|  _  \\                                \r\n(_) | | |                                \r\n  | | | |                                \r\n _| |\/ \/                                 \r\n(_)___\/                                  \r\n                                         \r\n                                         ");
  });

  return (
    <div className="page">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={true} /></MediaQuery>
      <div className='home-title'>hi, i&apos;m abhi - a musician, interdisciplinary creator, and <blue><a href="/images/Resume.pdf" target="_blank" className="home-resume">software developer</a></blue></div>
       <div className="line" />
      <div className='title'>featured work</div>
      <div className='project-container'>
        {projects.map((project, idx) => project ? (
          <a href={project.link} key={idx}>
            <div className='home-project'>
              <img src={project.cover} className='project-img' />
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
