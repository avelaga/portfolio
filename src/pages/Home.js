import React, { useEffect } from 'react';
import Navbar from '../layout/Navbar';
import MediaQuery from 'react-responsive';
import room from "../../dist/images/music/indulgent/mebed.jpg";
import deyoung from "../../dist/images/home/deyoung-desktop.jpg";
import gym from "../../dist/images/photos/portfolio/p1.jpg";
import ania1 from "../../dist/images/photos/portfolio/p6.jpg";
import ania2 from "../../dist/images/photos/portfolio/p13.jpg";
import house from "../../dist/images/photos/portfolio/p15.jpg";
import spark from "../../dist/images/home/yellow.jpg";
import mepurple from "../../dist/images/home/mepurple.jpg";
import drumming from "../../dist/images/music/mjf/drumming.mp4";
import drummingMobile from "../../dist/images/music/mjf/drummingmobile.mp4";

const images = [
  mepurple, gym, deyoung, ania1, spark, house, ania2
];

export default function Home() {
  // easter egg :)
  useEffect(() => {
    console.log(" _____                                   \r\n|_   _|                                  \r\n  | |                                    \r\n  | |                                    \r\n _| |_                                   \r\n \\___\/                                   \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n ___  ___  ___                           \r\n\/ __|\/ _ \\\/ _ \\                          \r\n\\__ \\  __\/  __\/                          \r\n|___\/\\___|\\___|                          \r\n                                         \r\n                                         \r\n                                         \r\n                                         \r\n _   _  ___  _   _                       \r\n| | | |\/ _ \\| | | |                      \r\n| |_| | (_) | |_| |                      \r\n \\__, |\\___\/ \\__,_|                      \r\n  __\/ |                                  \r\n |___\/                                   \r\n                      _    _             \r\n                     | |  (_)            \r\n ___ _ __   ___  __ _| | ___ _ __   __ _ \r\n\/ __| \'_ \\ \/ _ \\\/ _` | |\/ \/ | \'_ \\ \/ _` |\r\n\\__ \\ | | |  __\/ (_| |   <| | | | | (_| |\r\n|___\/_| |_|\\___|\\__,_|_|\\_\\_|_| |_|\\__, |\r\n                                    __\/ |\r\n                                   |___\/ \r\n _                                       \r\n(_)                                      \r\n _ _ __                                  \r\n| | \'_ \\                                 \r\n| | | | |                                \r\n|_|_| |_|                                \r\n                                         \r\n                                         \r\n _   _                                   \r\n| | | |                                  \r\n| |_| |__   ___                          \r\n| __| \'_ \\ \/ _ \\                         \r\n| |_| | | |  __\/                         \r\n \\__|_| |_|\\___|                         \r\n                                         \r\n                                         \r\n                           _             \r\n                          | |            \r\n  ___ ___  _ __  ___  ___ | | ___        \r\n \/ __\/ _ \\| \'_ \\\/ __|\/ _ \\| |\/ _ \\       \r\n| (_| (_) | | | \\__ \\ (_) | |  __\/       \r\n \\___\\___\/|_| |_|___\/\\___\/|_|\\___|       \r\n                                         \r\n                                         \r\n  ______                                 \r\n _|  _  \\                                \r\n(_) | | |                                \r\n  | | | |                                \r\n _| |\/ \/                                 \r\n(_)___\/                                  \r\n                                         \r\n                                         ");
  });

  return (
    <div className="appear">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"HOME"} mobile={true} /></MediaQuery>
        <div className="fadein">
        <video playsInline autoPlay muted loop className="f1">
          <MediaQuery minDeviceWidth={500}><source src={drumming} type="video/mp4" /></MediaQuery>
          <MediaQuery maxDeviceWidth={500}><source src={drummingMobile} type="video/mp4" /></MediaQuery>
        </video>
        <img src={images[0]} className="f2" />
        <img src={images[1]} className="f3" />
        <img src={images[2]} className="f4" />
        <img src={images[3]} className="f5" />
        <img src={images[4]} className="f6" />
        <img src={images[5]} className="f7" />
        <img src={images[6]} className="f8" />
      </div>
    </div>
  )
}