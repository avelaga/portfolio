'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import ModularPhoto from '../components/ModularPhoto';
import { portraitImages } from '../data/images.js';

export default function Portraits() {
  return (
    <div className="page">
      <Navbar activeLink={"PORTRAITS"} />
      <h1 className="title">Portrait Work</h1>
      {/* <div className="section-subtitle">selected works</div> */}
      <div className="artist-statement">
        A selection of commissioned and personal portrait work.
      </div>
      <div className="photo-mobile-spacer" />
            <ModularPhoto alt="portrait" img={portraitImages[4]} width={900} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto alt="portrait" img={portraitImages[5]} width={900} padding={true} align={"right"} numColumns={2} />
      <ModularPhoto alt="portrait" img={portraitImages[0]} width={900} padding={false} align={"center"} numColumns={3} />
      <ModularPhoto alt="portrait" img={portraitImages[1]} width={900} padding={false} align={"left"} numColumns={3} />
      <ModularPhoto alt="portrait" img={portraitImages[2]} width={900} padding={false} align={"right"} numColumns={3} />
      <ModularPhoto alt="portrait" img={portraitImages[3]} width={1400} padding={true} align={"center"} numColumns={1} />
                     <ModularPhoto alt="portrait" img={portraitImages[18]} width={700} padding={false} align={"left"} numColumns={2} />
                              <ModularPhoto alt="portrait" img={portraitImages[19]} width={700} padding={true} align={"right"} numColumns={2} />
      {/* <ModularPhoto alt="portrait" img={portraitImages[6]} width={800} padding={true} align={"center"} numColumns={1} /> */}
      <ModularPhoto alt="portrait" img={portraitImages[9]} width={700} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto alt="portrait" img={portraitImages[8]} width={900} padding={false} align={"right"} numColumns={2} />
  
      <ModularPhoto alt="portrait" img={portraitImages[10]} width={1000} padding={false} align={"center"} numColumns={1} />
      <ModularPhoto alt="portrait" img={portraitImages[11]} width={700} padding={true} align={"left"} numColumns={2} />
      <ModularPhoto alt="portrait" img={portraitImages[12]} width={700} padding={true} align={"right"} numColumns={2} />
      <ModularPhoto alt="portrait" img={portraitImages[13]} width={900} padding={true} align={"center"} numColumns={1} />
      {/* <ModularPhoto alt="portrait" img={portraitImages[14]} width={1000} padding={false} align={"center"} numColumns={1} /> */}
            <ModularPhoto alt="portrait" img={portraitImages[16]} width={700} padding={true} align={"right"} numColumns={3} />
      <ModularPhoto alt="portrait" img={portraitImages[15]} width={700} padding={false} align={"left"} numColumns={3} />


      <ModularPhoto alt="portrait" img={portraitImages[20]} width={900} padding={true} align={"center"} numColumns={3} />
            <ModularPhoto alt="portrait" img={portraitImages[17]} width={2000} padding={false} align={"center"} numColumns={1} />

         {/* <ModularPhoto alt="portrait" img={portraitImages[7]} width={700} padding={true} align={"left"} numColumns={3} /> */}


    </div>
  );
}
