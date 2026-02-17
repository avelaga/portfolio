'use client';

import React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../components/Navbar';
import ModularPhoto from '../components/ModularPhoto';
import { userVoidImages } from '../data/images.js';

export default function UserVoid() {
  return (
    <div className="page">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"USERVOID"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"USERVOID"} mobile={true} /></MediaQuery>
      <h1 className="title">User Void</h1>
      <div className="section-year">2019</div>
      <div className="artist-statement">
        User Void documents a group of computer science students as they navigate their coursework together, capturing the intensity, isolation, and perseverance that define their daily lives. The series portrays all-nighters, focused work sessions, moments of awkwardness, and the emotional weight of academic pressure, offering an intimate view of an often-overlooked environment.<br /><br />
        This work grew from a desire to illuminate a community rarely seen by outsiders. The spaces these students occupy are typically utilitarian and unnoticed, yet they witness both struggle and determination. By focusing on these moments, the series invites viewers to consider the individuals within this hidden world and reflect on the shared and unique experiences of those committed to their studies.
      </div>
      <div className="photo-mobile-spacer" />
      <ModularPhoto alt="classmate eating ramen out of cup" img={userVoidImages[0]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="group working around computer" img={userVoidImages[1]} width={900} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto alt="portrait of professor" img={userVoidImages[2]} width={600} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto alt="vaping in the lab" img={userVoidImages[3]} width={700} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait" img={userVoidImages[4]} width={1000} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="computer wires" img={userVoidImages[5]} width={2000} padding={false} align={"center"} numColumns={1} />
      <ModularPhoto alt="stairs" img={userVoidImages[6]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait 2" img={userVoidImages[7]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="student working at computer" img={userVoidImages[8]} width={900} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="eating lunch in the lab" img={userVoidImages[9]} width={800} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto alt="students in lab" img={userVoidImages[10]} width={800} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="computer" img={userVoidImages[11]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="student asleep" img={userVoidImages[12]} width={800} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="student at computer" img={userVoidImages[13]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="student at computer 2" img={userVoidImages[14]} width={600} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="students around computer" img={userVoidImages[15]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto alt="office hours" img={userVoidImages[16]} width={800} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait 3" img={userVoidImages[17]} width={700} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto alt="whiteboard at office hours" img={userVoidImages[18]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="stairs 2" img={userVoidImages[19]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto alt="portrait 4" img={userVoidImages[20]} width={700} padding={true} align={"right"} numColumns={1} />
    </div>
  );
}
