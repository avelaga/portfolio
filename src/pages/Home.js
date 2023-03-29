import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import MediaQuery from 'react-responsive';
import worldMissesYou from '../../dist/images/software/dadalab/dadalab4.jpg';
import breakMyFall from '../../dist/images/music/indulgent/breakMyFall.jpg';
import noOneKnows from '../../dist/images/music/indulgent/noOneKnows.jpg';
import rebound from '../../dist/images/music/indulgent/rebound.jpg';
import miami1 from '../../dist/images/photos/miami/miami1.jpg';
import uservoid1 from '../../dist/images/photos/uservoid/uservoid1.jpg';

const projects = [
  {
    cover: worldMissesYou,
    title: "the world misses you",
    medium: "led installation",
    year: "2021",
    link: "/software"
  },
  {
    cover: miami1,
    title: "miami vice cocaine dream",
    medium: "photo series",
    year: "2018 - 2019",
    link: "/miamivice"
  },
  {
    cover: rebound,
    title: "rebound - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/6JTaf4T4GYIWPRbBioJnWu?si=47ae2a1a35b9475e"
  },
  {
    cover: noOneKnows,
    title: "no one knows - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/584ATM5plnkdi60rd6Ns42?si=fdb42d68f3fe4564"
  },
  {
    cover: breakMyFall,
    title: "break my fall - single",
    medium: "music",
    year: "2022",
    link: "https://open.spotify.com/track/6FRTGOjhRkiJVDBRz5CWWt?si=0c305147687d436f"
  },
  {
    cover: uservoid1,
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
    <div className="page">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={true} /></MediaQuery>
      <div className='home-title'>hi, i'm abhi - i make <a href="/music"><blue>music</blue></a>, <a href="/portfolio"><red>photos</red></a>, and <a href="/software"><green>transmedia art</green></a></div>
      <div className="line" />
      <div className='title'>featured work</div>
      <div className='project-container'>
        {projects.map((project) =>
          <a href={project.link}>
            <div className='home-project'>
              <img src={project.cover} className='project-img' />
              <div className='project-title'>{project.title}</div>
              <div className='project-medium'>{project.medium}</div>
              <div className='project-year'>{project.year}</div>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}