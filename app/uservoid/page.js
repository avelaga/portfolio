'use client';

import React from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../../src/components/Navbar';
import ModularPhoto from '../../src/components/ModularPhoto';
import { userVoidImages } from '../../src/data/images.js';

export default function UserVoid() {
  return (
    <div className="page">
      <MediaQuery minDeviceWidth={500}><Navbar activeLink={"USERVOID"} mobile={false} /></MediaQuery>
      <MediaQuery maxDeviceWidth={500}><Navbar activeLink={"USERVOID"} mobile={true} /></MediaQuery>
      <div className="title">User Void</div>
      <div className="section-year">2019</div>
      <div className="artist-statement">
        User Void documents a group of computer science students as they navigate their coursework together, capturing the intensity, isolation, and perseverance that define their daily lives. The series portrays all-nighters, focused work sessions, moments of awkwardness, and the emotional weight of academic pressure, offering an intimate view of an often-overlooked environment.<br /><br />
        This work grew from a desire to illuminate a community rarely seen by outsiders. The spaces these students occupy are typically utilitarian and unnoticed, yet they witness both struggle and determination. By focusing on these moments, the series invites viewers to consider the individuals within this hidden world and reflect on the shared and unique experiences of those committed to their studies.
      </div>
      <div className="photo-mobile-spacer" />
      <ModularPhoto img={userVoidImages[0]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[1]} width={900} padding={true} align={"left"} numColumns={1} />
      <ModularPhoto img={userVoidImages[2]} width={600} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={userVoidImages[3]} width={700} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[4]} width={1000} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[5]} width={2000} padding={false} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[6]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[7]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[8]} width={900} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[9]} width={800} padding={true} align={"right"} numColumns={1} />
      <ModularPhoto img={userVoidImages[10]} width={800} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[11]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[12]} width={800} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[13]} width={2000} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[14]} width={600} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[15]} width={600} padding={true} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[16]} width={800} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[17]} width={700} padding={true} align={"center"} numColumns={1} />
      <ModularPhoto img={userVoidImages[18]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[19]} width={600} padding={false} align={"center"} numColumns={2} />
      <ModularPhoto img={userVoidImages[20]} width={700} padding={true} align={"right"} numColumns={1} />
    </div>
  );
}
